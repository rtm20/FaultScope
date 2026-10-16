import atexit
from contextlib import asynccontextmanager
import hashlib
import hmac
import json
import logging
import os
import threading
import time
from typing import Literal
from urllib.parse import urlsplit

from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from starlette.concurrency import run_in_threadpool
from pydantic import BaseModel, ConfigDict, Field, ValidationError, model_validator
import numpy as np

from backend.analysis import EvidenceSession, local_review, summarize
from backend.gemini import GeminiSettings, investigate as gemini_investigate
from backend.recordings import ROOT, RecordingLibrary
from backend.state import StateStore
from backend.uploads import UploadedRecording, UploadedRecordingStore


LOGGER = logging.getLogger("faultscope")
API_ERRORS = {status: {"description": description} for status, description in {
    400: "Invalid recording relationship", 401: "Session or invite required", 403: "Origin or CSRF rejected",
    404: "Resource unavailable", 413: "Request too large", 415: "JSON required",
    422: "Invalid arguments", 429: "Usage or concurrency limit", 503: "Data or AI unavailable",
}.items()}


def configured_state(testing):
    backend = os.environ.get("FAULTSCOPE_STATE_BACKEND", "sqlite")
    if backend == "firestore":
        from backend.cloud_state import configured_cloud_state
        return configured_cloud_state()
    if backend != "sqlite" or os.environ.get("K_SERVICE"):
        raise ValueError("Cloud Run requires explicitly configured Firestore state")
    return StateStore(":memory:" if testing else ROOT / ".faultscope-state" / "state.sqlite3")


def origin_configuration(origin):
    hosts = ["127.0.0.1", "localhost", "testserver"]
    if not origin:
        if os.environ.get("K_SERVICE"):
            hosts.extend(["*.run.app", "*.a.run.app"])
        return "", hosts
    parsed = urlsplit(origin)
    if parsed.scheme != "https" or not parsed.hostname or parsed.path not in ("", "/") or parsed.query or parsed.fragment or parsed.username:
        raise ValueError("Public origin must be an explicit HTTPS origin")
    hosts.append(parsed.hostname)
    return origin.rstrip("/"), hosts


def invite_configuration(repository, supplied, testing):
    code = supplied or os.environ.get("FAULTSCOPE_INVITE_CODE", "")
    if code and not 20 <= len(code) <= 128:
        raise ValueError("Invite code must contain 20 to 128 characters")
    if code and not testing and isinstance(repository, StateStore) and not supplied:
        (ROOT / ".faultscope-state" / "access-code.txt").write_text(code, encoding="ascii")
    return code


class InvestigationRequest(BaseModel):
    model_config = ConfigDict(extra="forbid", allow_inf_nan=False)
    recording_id: str | None = Field(default=None, min_length=3, max_length=80)
    mode: Literal["tools", "gemini"] = "tools"
    challenge_of: str | None = Field(default=None, max_length=80)
    previous_turn_id: str | None = Field(default=None, min_length=1, max_length=80)
    uploaded_record: UploadedRecording | None = None
    question: str | None = Field(default=None, max_length=500)
    focus_component: Literal["pump", "valve", "accumulator", "cooler", "drive", "support", "bearing", "encoder"] | None = None
    focus_channel: str | None = Field(default=None, max_length=16)
    window_start_s: float | None = Field(default=None, ge=0, le=60)
    window_end_s: float | None = Field(default=None, gt=0, le=60)

    @model_validator(mode="after")
    def require_one_record_source(self):
        if (self.recording_id is None) == (self.uploaded_record is None):
            raise ValueError("Provide exactly one catalog recording_id or uploaded_record")
        return self


class InviteRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")
    code: str = Field(min_length=1, max_length=128)


class ReviewRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")
    decision: Literal["reviewed", "needs_follow_up", "rejected"]
    reviewer: str = Field(default="", max_length=80)
    notes: str = Field(default="", max_length=2000)


class EvidenceRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")
    recording_id: str = Field(min_length=3, max_length=80)
    tool: Literal["summarize_signal", "compare_windows", "compare_channels", "spectral_summary", "transient_summary"]
    arguments: dict = Field(default_factory=dict)


async def parse_request(request, model, max_bytes=8192):
    if request.headers.get("content-type", "").split(";")[0] != "application/json":
        raise HTTPException(415, "Use application/json")
    body = bytearray()
    async for chunk in request.stream():
        body.extend(chunk)
        if len(body) > max_bytes:
            raise HTTPException(413, "Request too large")
    try:
        return model.model_validate_json(bytes(body))
    except ValidationError as error:
        raise HTTPException(422, "Invalid request") from error


def create_app(store=None, settings=None, state=None, invite_code=None, public_origin=None):
    config_error = "Live AI is disabled. Confirmed funding and an explicit model configuration are required."
    if settings is None:
        try:
            settings = GeminiSettings.from_environment()
        except ValueError as error:
            settings = GeminiSettings()
            config_error = str(error)
    public_origin, hosts = origin_configuration(public_origin or os.environ.get("FAULTSCOPE_PUBLIC_ORIGIN", ""))
    owns_state = state is None
    state = state or configured_state(store is not None)
    invite_code = invite_configuration(state, invite_code, store is not None)
    @asynccontextmanager
    async def lifespan(_app):
        try:
            yield
        finally:
            if owns_state:
                state.close()

    app = FastAPI(title="FaultScope investigation service", version="0.3.0", docs_url=None, redoc_url=None, lifespan=lifespan, responses=API_ERRORS)
    app.state.repository = state
    app.add_middleware(TrustedHostMiddleware, allowed_hosts=hosts)
    gate = threading.BoundedSemaphore(2)
    rate_salt = state.secret("rate_salt").encode()

    def session_for(request, required=False):
        session = state.session(request.cookies.get("faultscope_session"))
        if required and not session:
            raise HTTPException(401, "Open a workspace session first")
        return session

    def check_csrf(request, session):
        supplied = request.headers.get("x-faultscope-csrf", "")
        if not hmac.compare_digest(supplied.encode(), session["csrf"].encode()):
            raise HTTPException(403, "Session verification failed; refresh the workspace")

    def attach_cookie(response, token):
        response.set_cookie("faultscope_session", token, httponly=True, secure=bool(public_origin or os.environ.get("K_SERVICE")), samesite="strict", max_age=28_800, path="/")

    def rate_key(request, action):
        address = request.client.host if request.client else "unknown"
        return action + ":" + hmac.new(rate_salt, address.encode(), hashlib.sha256).hexdigest()

    @app.middleware("http")
    async def security_headers(request, call_next):
        expected = public_origin or str(request.base_url).rstrip("/")
        origin = request.headers.get("origin")
        if request.method not in {"GET", "HEAD", "OPTIONS"} and origin and origin != expected:
            return JSONResponse({"detail": "Cross-origin requests are not allowed"}, status_code=403)
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["Referrer-Policy"] = "same-origin"
        response.headers["X-Frame-Options"] = "DENY"
        if public_origin or os.environ.get("K_SERVICE"):
            response.headers["Strict-Transport-Security"] = "max-age=31536000"
        if request.url.path.startswith("/api/"):
            response.headers["Cache-Control"] = "no-store"
        return response

    @app.get("/api/session")
    def workspace_session(request: Request):
        session = session_for(request)
        token = None
        if session is None:
            if not state.rate_allowed(rate_key(request, "session"), 60, 3600):
                raise HTTPException(429, "Too many new sessions")
            token, session = state.new_session()
        response = JSONResponse({"authorized": bool(session["authorized"]), "csrf": session["csrf"], "expires": session["expires"]})
        if token:
            attach_cookie(response, token)
        return response

    @app.post("/api/session/login")
    async def login(request: Request):
        if not invite_code:
            raise HTTPException(503, "Invite-code login is not configured; live AI uses bounded public sessions")
        session = session_for(request, required=True)
        check_csrf(request, session)
        if not state.rate_allowed(rate_key(request, "login"), 5):
            raise HTTPException(429, "Too many attempts; try again after 15 minutes")
        payload = await parse_request(request, InviteRequest)
        if not hmac.compare_digest(payload.code.encode(), invite_code.encode()):
            raise HTTPException(401, "Invalid invite code")
        token, _session = state.authorize(request.cookies["faultscope_session"])
        response = JSONResponse({"authorized": True})
        attach_cookie(response, token)
        return response

    @app.post("/api/session/logout")
    def logout(request: Request):
        session = session_for(request, required=True)
        check_csrf(request, session)
        state.revoke(request.cookies["faultscope_session"])
        response = JSONResponse({"authorized": False})
        response.delete_cookie("faultscope_session", path="/")
        return response

    def current_store():
        nonlocal store
        try:
            if store is None:
                store = RecordingLibrary()
            return store
        except (OSError, ValueError) as error:
            raise HTTPException(503, "Public recordings are unavailable. Run the recording preparation command.") from error

    def known_record(recording_id):
        try:
            return current_store().get(recording_id)
        except KeyError as error:
            raise HTTPException(404, "Unknown recording") from error

    frontend_dist = ROOT / "frontend" / "dist"
    if frontend_dist.is_dir():
        app.mount("/ui-assets", StaticFiles(directory=frontend_dist), name="frontend-assets")

    @app.get("/")
    def workspace():
        index = frontend_dist / "index.html"
        if not index.is_file():
            raise HTTPException(503, "UI bundle unavailable; use the Vite development server locally")
        return FileResponse(index, headers={"Cache-Control": "no-store"})

    @app.get("/demo")
    def visual_demo():
        return FileResponse(ROOT / "faultscope-demo.html", headers={"Cache-Control": "no-store"})

    @app.get("/assets/{name}")
    def asset(name: str):
        if name not in {"three.min.js", "lucide.min.js", "live-workspace.js", "three-LICENSE.txt", "lucide-LICENSE.txt", "THIRD_PARTY.md"}:
            raise HTTPException(404, "Unknown public asset")
        path = ROOT / "assets" / name
        if not path.is_file():
            raise HTTPException(404, "Asset unavailable")
        return FileResponse(path)

    @app.get("/api/health")
    def health():
        return {"status": "ok", "model_called": False}

    @app.get("/api/capabilities")
    def capabilities():
        try:
            count = len(current_store().catalog())
        except HTTPException:
            count = 0
        return {
            "recordings_ready": count, "default_mode": "gemini" if settings.enabled else "tools",
            "runtime": {"hosting": "cloud_run" if os.environ.get("K_SERVICE") else "local",
                        "storage": "sqlite" if isinstance(state, StateStore) else "firestore"},
            "gemini": {"enabled": settings.enabled, "reason": "Configured; calls may incur charges" if settings.enabled else config_error,
                       "model": settings.model if settings.enabled else None, "process_run_limit": settings.run_limit,
                    "lifetime_run_limit": settings.run_limit, "runs_used": state.used_runs(), "invite_required": False,
                    "access_mode": "Public browser sessions; per-IP throttles; shared lifetime model-run limit",
                    "conversation_context_turns": 6},
            "persistence": type(state).__name__ + "; seven-day report visibility, eight-hour browser sessions",
            "boundary": "Read-only public recordings; public live AI is bounded by a shared lifetime quota and per-IP throttles. No equipment control or validated diagnosis.",
        }

    @app.get("/api/recordings")
    def recordings():
        return {"recordings": current_store().catalog(), "source": current_store().source}

    @app.get("/api/recordings/{recording_id}")
    def recording(recording_id: str):
        raw = known_record(recording_id)
        description = current_store().describe(recording_id, include_waveforms=True)
        for channel in description["channels"]:
            channel["statistics"] = summarize(np.asarray(raw["channels"][channel["id"]]["values"]))
        return description

    @app.get("/api/investigations/{identifier}")
    def investigation_result(identifier: str, request: Request):
        session = session_for(request, required=True)
        report = state.report(identifier, session["owner"])
        if report is None:
            raise HTTPException(404, "Completed investigation unavailable or expired")
        return report

    @app.post("/api/evidence")
    async def manual_evidence(request: Request):
        payload = await parse_request(request, EvidenceRequest)
        known_record(payload.recording_id)
        if not state.rate_allowed(rate_key(request, "evidence"), 120, 3600):
            raise HTTPException(429, "Evidence calculation rate limit reached")
        if not gate.acquire(blocking=False):
            raise HTTPException(429, "Two analyses are already running")
        try:
            evidence = await run_in_threadpool(EvidenceSession(current_store(), payload.recording_id).run, payload.tool, payload.arguments)
        except ValueError as error:
            raise HTTPException(422, str(error)) from error
        finally:
            gate.release()
        return {"evidence": evidence, "author": "reviewer_requested_tools", "model_called": False}

    @app.get("/api/investigations")
    def investigation_history(request: Request):
        session = session_for(request, required=True)
        return {"investigations": state.history(session["owner"])}

    @app.post("/api/investigations/{identifier}/review")
    async def review(identifier: str, request: Request):
        session = session_for(request, required=True)
        check_csrf(request, session)
        payload = await parse_request(request, ReviewRequest)
        feedback = payload.model_dump() | {"reviewed_at": time.time()}
        if not state.review(identifier, session["owner"], feedback):
            raise HTTPException(404, "Completed investigation unavailable or expired")
        return {"review": feedback}

    @app.post("/api/investigations")
    async def investigation(request: Request):
        payload = await parse_request(request, InvestigationRequest, max_bytes=8_000_000)
        upload_store = UploadedRecordingStore(payload.uploaded_record) if payload.uploaded_record else None
        recording_store = upload_store or current_store()
        recording_id = upload_store.identifier if upload_store else payload.recording_id
        record = recording_store.get(recording_id) if upload_store else known_record(recording_id)
        descriptor = recording_store.describe(recording_id)
        question = payload.question.strip() if payload.question else None
        if question == "":
            question = None
        if payload.mode == "tools" and question:
            raise HTTPException(422, "Questions need Gemini mode; numerical mode computes evidence only")
        if payload.focus_channel and payload.focus_channel not in record["channels"]:
            raise HTTPException(422, "Focused channel is not present in this recording")
        if payload.focus_component:
            available_components = {"hydraulic": {"pump", "valve", "accumulator", "cooler"},
                                    "bearing": {"drive", "support", "bearing", "encoder"}}
            if payload.focus_component not in available_components.get(record.get("profile", "hydraulic"), set()):
                raise HTTPException(422, "Focused component is not part of this equipment reference")
        if (payload.window_start_s is None) != (payload.window_end_s is None):
            raise HTTPException(422, "Provide both focus-window endpoints")
        if payload.window_start_s is not None and not payload.window_start_s < payload.window_end_s <= record.get("duration_s", 60):
            raise HTTPException(422, "Focus window is outside this recording")
        session_info = session_for(request)
        token = None
        if payload.mode == "gemini":
            if not settings.enabled:
                raise HTTPException(503, config_error)
            if not session_info:
                raise HTTPException(401, "Start a browser session before investigating")
            check_csrf(request, session_info)
        conversation = []
        prior_evidence = {}
        continuation = payload.previous_turn_id
        if continuation and (payload.mode != "gemini" or payload.challenge_of):
            raise HTTPException(422, "Conversation continuation requires Gemini mode without a separate challenge")
        for _turn in range(6):
            if not continuation:
                break
            saved = state.report(continuation, session_info["owner"])
            if not saved or saved["mode"] != "gemini" or saved["recording_id"] != recording_id:
                if not conversation:
                    raise HTTPException(404, "Conversation unavailable for this recording or browser session")
                break
            entry = {"question": saved.get("question"), "answer": saved["finding"], "view_context": saved.get("view_context", {})}
            cited = set(saved["finding"].get("evidence_ids", []))
            for observation in saved["finding"].get("observations", []):
                cited.update(observation["evidence_ids"])
            evidence = {item["id"]: item for item in saved["evidence"] if item["id"] in cited and item.get("recording_id") == recording_id}
            combined = {**prior_evidence, **evidence}
            if len(json.dumps({"conversation": [entry, *conversation], "evidence": list(combined.values())})) > 36_000:
                if not conversation:
                    raise HTTPException(422, "Conversation context is too large; start a new conversation")
                break
            conversation.insert(0, entry)
            prior_evidence = combined
            continuation = saved.get("previous_turn_id")
        if not state.rate_allowed(rate_key(request, "investigation"), 120, 3600):
            raise HTTPException(429, "Investigation rate limit reached")
        if session_info is None:
            token, session_info = state.new_session()
        previous = None
        if payload.challenge_of:
            prior = state.report(payload.challenge_of, session_info["owner"])
            if not prior or prior["recording_id"] != recording_id:
                raise HTTPException(400, "Challenge must reference a completed investigation of this recording")
            if payload.mode != "gemini":
                raise HTTPException(400, "A numerical replay is not an AI challenge")
            previous = prior["finding"]
        if not gate.acquire(blocking=False):
            raise HTTPException(429, "Two investigations are already running")
        try:
            identifier = state.reserve(session_info["owner"], recording_id, payload.mode, settings.run_limit)
        except ValueError as error:
            gate.release()
            raise HTTPException(429, str(error)) from error
        except Exception:
            gate.release()
            raise

        def stream():
            started = time.monotonic()
            sequence = 0
            finding = None
            completed = False
            model_usage = []
            session = EvidenceSession(recording_store, recording_id)
            session.evidence.update(prior_evidence)

            def encode(event):
                nonlocal sequence
                sequence += 1
                envelope = {**event, "investigation_id": identifier, "recording_id": recording_id, "sequence": sequence, "mode": payload.mode}
                return "data: " + json.dumps(envelope, allow_nan=False) + "\n\n"

            try:
                yield encode({"type": "started", "message": "Numerical tools running; no AI call" if payload.mode == "tools" else "Gemini is reading your message"})
                view_context = {key: value for key, value in {
                    "component": payload.focus_component,
                    "channel": payload.focus_channel,
                    "window_s": [payload.window_start_s, payload.window_end_s] if payload.window_start_s is not None else None,
                }.items() if value is not None}
                events = local_review(session) if payload.mode == "tools" else gemini_investigate(
                    session, descriptor, settings, previous,
                    question=question, view_context=view_context,
                    conversation=conversation,
                )
                for event in events:
                    if event["type"] == "finding":
                        finding = event["finding"]
                    if event["type"] == "model_usage":
                        model_usage.append({key: event.get(key) for key in ("turn", "total_tokens", "model_version")})
                    yield encode(event)
                if finding is None:
                    raise ValueError("Investigation ended without an accepted finding")
                cited = set(finding.get("evidence_ids", []))
                for observation in finding.get("observations", []):
                    cited.update(observation["evidence_ids"])
                retained_evidence = [item for key, item in session.evidence.items() if key not in prior_evidence or key in cited]
                report = {
                    "id": identifier, "recording_id": recording_id, "mode": payload.mode,
                    "source": descriptor.get("source", getattr(recording_store, "source", {})), "finding": finding,
                    "evidence": retained_evidence, "challenge_of": payload.challenge_of,
                    "previous_turn_id": payload.previous_turn_id, "context_turns": len(conversation),
                    "question": question, "view_context": view_context,
                    "model": {"requested": settings.model if payload.mode == "gemini" else None, "turns": model_usage},
                    "elapsed_ms": round((time.monotonic() - started) * 1000), "authorized_action": "None",
                    "validation_boundary": "Numerical outputs and evidence references are verifiable; no diagnostic accuracy or safety clearance is established.",
                }
                state.finish(identifier, report)
                completed = True
                yield encode({"type": "completed", "report": report})
            except Exception as error:
                status = getattr(error, "code", None)
                LOGGER.warning("investigation_failed id=%s mode=%s error=%s provider_status=%s", identifier, payload.mode, type(error).__name__, status if isinstance(status, int) else None)
                yield encode({"type": "error", "code": type(error).__name__, "message": "Gemini could not complete this response. No substitute answer was generated. Please try again."})
            finally:
                try:
                    if not completed:
                        state.finish(identifier)
                finally:
                    gate.release()

        response = StreamingResponse(stream(), media_type="text/event-stream", headers={"Cache-Control": "no-store", "X-Accel-Buffering": "no"})
        if token:
            attach_cookie(response, token)
        return response

    return app


app = create_app()
atexit.register(app.state.repository.close)