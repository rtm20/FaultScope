from datetime import datetime, timedelta, timezone
import hashlib
import json
import os
import re
import secrets
import time
from uuid import uuid4

from google.auth.compute_engine import Credentials as AttachedCredentials
from google.auth.credentials import AnonymousCredentials
from google.cloud import firestore
from google.cloud.firestore_v1.base_query import FieldFilter

from backend.gemini import validate_authentication


class FirestoreState:
    def __init__(self, client, namespace="faultscope"):
        self.client = client
        self.namespace = namespace
        self.secrets = {}

    def reference(self, collection, identifier):
        return self.client.collection(f"{self.namespace}_{collection}").document(identifier)

    def transaction(self, operation):
        return firestore.transactional(operation)(self.client.transaction(max_attempts=10))

    def close(self):
        self.client.close()

    @staticmethod
    def token_hash(token):
        return hashlib.sha256(token.encode()).hexdigest()

    def secret(self, name):
        if name not in self.secrets:
            reference = self.reference("settings", name)

            def obtain(transaction):
                existing = reference.get(transaction=transaction).to_dict()
                if existing:
                    return existing["value"]
                value = secrets.token_urlsafe(32)
                transaction.set(reference, {"value": value})
                return value

            self.secrets[name] = self.transaction(obtain)
        return self.secrets[name]

    def new_session(self):
        token = secrets.token_urlsafe(32)
        session = {"owner": uuid4().hex, "csrf": secrets.token_urlsafe(24), "authorized": False, "expires": time.time() + 28_800}
        self.reference("sessions", self.token_hash(token)).set(session | {"expires_at": datetime.now(timezone.utc) + timedelta(hours=8)})
        return token, session

    def session(self, token):
        if not token or len(token) > 128:
            return None
        session = self.reference("sessions", self.token_hash(token)).get().to_dict()
        return session if session and session["expires"] > time.time() else None

    def authorize(self, token):
        reference = self.reference("sessions", self.token_hash(token))

        def rotate(transaction):
            session = reference.get(transaction=transaction).to_dict()
            if not session or session["expires"] <= time.time():
                raise ValueError("Session expired")
            replacement = secrets.token_urlsafe(32)
            session.update(authorized=True, csrf=secrets.token_urlsafe(24))
            transaction.delete(reference)
            transaction.set(self.reference("sessions", self.token_hash(replacement)), session)
            return replacement, session

        return self.transaction(rotate)

    def revoke(self, token):
        self.reference("sessions", self.token_hash(token or "")).delete()

    def rate_allowed(self, bucket, maximum, window=900):
        reference = self.reference("attempts", self.token_hash(bucket))

        def reserve(transaction):
            now = time.time()
            existing = reference.get(transaction=transaction).to_dict() or {}
            recent = [stamp for stamp in existing.get("timestamps", []) if stamp > now - window]
            if len(recent) >= maximum:
                return False
            transaction.set(reference, {"timestamps": recent + [now], "expires_at": datetime.now(timezone.utc) + timedelta(hours=1)})
            return True

        return self.transaction(reserve)

    def reserve(self, owner, recording_id, mode, limit):
        identifier = uuid4().hex
        counter = self.reference("settings", "live_runs")
        reference = self.reference("runs", identifier)

        def reserve_run(transaction):
            if mode == "gemini":
                used = (counter.get(transaction=transaction).to_dict() or {}).get("value", 0)
                if used >= limit:
                    raise ValueError("Lifetime live-run allowance exhausted")
                transaction.set(counter, {"value": used + 1})
            transaction.set(reference, {"id": identifier, "owner": owner, "recording_id": recording_id, "mode": mode,
                                       "status": "running", "created": time.time(), "expires_at": datetime.now(timezone.utc) + timedelta(days=7)})
            return identifier

        return self.transaction(reserve_run)

    def used_runs(self):
        return (self.reference("settings", "live_runs").get().to_dict() or {}).get("value", 0)

    def finish(self, identifier, report=None):
        payload = json.dumps(report, allow_nan=False) if report else None
        if payload and len(payload.encode()) > 750_000:
            raise ValueError("Report exceeds the persistent payload limit")
        self.reference("runs", identifier).update({"status": "completed" if report else "failed", "report": payload,
                                                  "title": report["finding"]["title"] if report else "Incomplete investigation"})

    def report(self, identifier, owner):
        record = self.reference("runs", identifier).get().to_dict()
        if not record or record["owner"] != owner or record["status"] != "completed" or record["created"] < time.time() - 604_800:
            return None
        return json.loads(record["report"]) | {"review": record.get("feedback")}

    def history(self, owner):
        query = self.client.collection(f"{self.namespace}_runs").where(filter=FieldFilter("owner", "==", owner)).order_by("created", direction=firestore.Query.DESCENDING).limit(50)
        records = [snapshot.to_dict() for snapshot in query.select(["id", "recording_id", "mode", "status", "created", "title", "feedback"]).stream()]
        return [{key: record.get(key) for key in ("id", "recording_id", "mode", "status", "created", "title")} | {"review": record.get("feedback")}
                for record in records if record["created"] >= time.time() - 604_800]

    def review(self, identifier, owner, feedback):
        reference = self.reference("runs", identifier)

        def update(transaction):
            record = reference.get(transaction=transaction).to_dict()
            if not record or record["owner"] != owner or record["status"] != "completed" or record["created"] < time.time() - 604_800:
                return False
            transaction.update(reference, {"feedback": feedback})
            return True

        return self.transaction(update)


def configured_cloud_state():
    project = os.environ.get("FAULTSCOPE_GCP_PROJECT", "")
    if not re.fullmatch(r"[a-z][a-z0-9-]{4,61}[a-z0-9]", project):
        raise ValueError("Explicit Firestore project is required")
    emulator = os.environ.get("FIRESTORE_EMULATOR_HOST")
    if emulator:
        if os.environ.get("K_SERVICE") or not re.fullmatch(r"(?:127\.0\.0\.1|localhost):\d{2,5}", emulator):
            raise ValueError("Only a local development Firestore emulator is allowed")
        credentials = AnonymousCredentials()
    else:
        if os.environ.get("FAULTSCOPE_ALLOW_CLOUD_STATE") != "1":
            raise ValueError("Cloud-state usage requires explicit funding approval")
        account = os.environ.get("FAULTSCOPE_RUNTIME_SERVICE_ACCOUNT", "")
        validate_authentication("metadata", "", account, project, os.environ)
        credentials = AttachedCredentials(service_account_email=account, scopes=["https://www.googleapis.com/auth/cloud-platform"])
    client = firestore.Client(project=project, database=os.environ.get("FAULTSCOPE_FIRESTORE_DATABASE", "(default)"), credentials=credentials)
    return FirestoreState(client)