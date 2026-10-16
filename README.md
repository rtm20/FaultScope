# FaultScope

A read-only investigation workspace for public hydraulic and bearing recordings, built by TorqueShift. Interactive reference assemblies, native-rate signal tools and reviewable evidence share one workspace. There is no equipment connection or operational control.

## Current capabilities

- Eight checksum-verified UCI hydraulic recordings plus three publisher-checksummed Ottawa bearing recordings. Inference receives no condition labels or condition-bearing filenames.
- Hydraulic channels retain native 1/10/100 Hz rates; the two bearing channels retain all 2,000,000 samples each at 200 kHz. Waveform previews preserve extrema and native timestamps.
- Numerical tools for window statistics, window/cross-channel comparisons, Welch power spectra and transient measurements. These are descriptive tools, not a fault classifier.
- Distinct hydraulic and bearing reference assemblies, equipment/library selection, replay, rotation, component separation and linked evidence views.
- Browser-session history, saved reviewer decisions, JSON briefs, displayed-waveform CSV and printable reports. Manual evidence is distinguished from investigation evidence.
- Public live AI with rotated HTTP-only sessions, CSRF checks, per-IP request throttles and an atomic shared lifetime-run limit. SQLite supports local use; Firestore handles deployed history and quotas.
- The React workspace is Gemini-first. Greetings and clarification can receive model-generated conversational replies without measurements. Investigation requests use bounded tools and validated citations. The API retains explicit non-AI numerical review for tests and legacy clients; it is never an automatic Gemini fallback.
- Follow-ups send `previous_turn_id`, not browser-authored assistant history. The server retrieves up to six completed turns from the same owner and recording, with a 36 KB context bound. It can reuse cited measured evidence; new conversations and recording switches clear the UI link. Failed turns do not become conversation memory.
- One live Gemini 2.5 Flash investigation has completed on Cloud Run. The ten-run lifetime allowance is shared through Firestore; one run is used. This is an engineering demo, not a validated diagnostic model.

This is a deployed competition prototype, not a validated fault classifier or production-grade safety system. It does not predict remaining useful life, prescribe repairs, certify safety, or establish time/cost savings. Geometry remains illustrative; exact sensor placement is unverified.

## Run locally

PowerShell, from this directory, using Python 3.13:

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
$archive = Join-Path $env:TEMP 'uci-hydraulic-447.zip'
Invoke-WebRequest -Uri 'https://archive.ics.uci.edu/static/public/447/condition+monitoring+of+hydraulic+systems.zip' -OutFile $archive
.\.venv\Scripts\python.exe -m backend.recordings --archive $archive
.\.venv\Scripts\python.exe -m backend.bearings
.\.venv\Scripts\python.exe -m backend.preflight
.\.venv\Scripts\python.exe -m uvicorn backend.app:app --host 127.0.0.1 --port 8765 --no-proxy-headers
```

Open [the real-recording workspace](http://127.0.0.1:8765/). If the archive and environment are already prepared, only the final command is needed. Choose an unused port if 8765 is occupied.

The [visual concept](http://127.0.0.1:8765/demo) remains available separately. Opening [faultscope-demo.html](faultscope-demo.html) directly also runs the synthetic concept, not the real-data backend.

For the current React development workspace, run `tools/run-live.ps1 -Port 8767 -MaximumLiveRuns 10` with the existing explicit personal credentials, then `npm --prefix frontend run dev -- --host 127.0.0.1`. Vite proxies to port 8767 while preserving the browser Host for origin checks. No production build is needed for local development.

The browser session is created automatically and protected by an HTTP-only cookie
and CSRF token. Loading the page, switching recordings and replaying signals make no
model calls. Each sent message, including a greeting, uses the configured shared
Gemini request allowance; no automatic retry or hardcoded answer is substituted.
The local SQLite state must not be deleted to reset its counter.

## Google services in the experience

The welcome and chat identify Google Cloud, Gemini and Vertex AI. The About view
explains Gemini inference through Vertex AI, application hosting on Cloud Run,
Firestore session/report storage, Cloud Build container builds and Artifact Registry
image storage. Runtime metadata distinguishes local SQLite development from cloud
hosting. Service attribution does not imply Google endorsement, and operator billing
information is intentionally excluded from the customer-facing interface.

## Google Cloud CLI

Use [tools/gcloud.ps1](tools/gcloud.ps1) from PowerShell. It invokes the verified
Windows SDK 587.0.0 under `.tools`, selects the independent personal account and
FaultScope project, and uses `.gcloud` for OAuth/configuration state. Inherited
Cloud SDK overrides are cleared for the command and restored afterward; the
machine-wide PATH and default Cloud SDK profile are not changed. Explicit CLI
arguments can still override defaults, so this launcher is not an IAM boundary.

```powershell
.\tools\gcloud.ps1 version
.\tools\gcloud.ps1 projects describe faultscope-torqueshift-2026
```

Fresh OAuth login and application quota-project setup have already succeeded.
When reauthentication is required, use the personal account in the browser:

```powershell
.\tools\gcloud.ps1 auth login riteshm2099@gmail.com --force --launch-browser --update-adc
.\tools\gcloud.ps1 auth application-default set-quota-project faultscope-torqueshift-2026
```

Application credentials are stored at `.gcloud/application_default_credentials.json`;
never print, share or commit this file. `.gitignore` excludes both local folders,
and `.gcloudignore` includes those exclusions for future source uploads. The
launcher requires the local SDK installation, which is intentionally not committed.
Pinned download and checksum details are in the [cloud setup record](research/gcp-reuse-audit.md).

The application is deployed at [FaultScope by TorqueShift](https://faultscope-53fcf2hofa-uc.a.run.app/).
Cloud Run scales to zero with a maximum of one instance and concurrency two. The
image is `us-central1-docker.pkg.dev/faultscope-torqueshift-2026/faultscope/workspace:20261002214814`.
The dedicated runtime identity uses attached metadata authentication; Firestore
stores session-private history and the shared lifetime run counter. Public browser
sessions can use Gemini subject to CSRF checks, per-IP throttles and the global
ten-run limit. No invite is required.

## Gemini configuration

[.env.example](.env.example) documents the supported variables. The app **does not automatically load this file or a .env file**. Set the variables explicitly in the server process after deciding the project and budget.

The example targets the dedicated `faultscope-torqueshift-2026` project, created
outside any organization and linked to the existing `GCP-Billing` account. The
AI Platform, Cloud Run, Cloud Build and Artifact Registry APIs are enabled. The
`faultscope-runtime` service account has project-scoped `roles/aiplatform.user`
access and no user-managed keys. Local personal OAuth is authorized; separately,
the deployed keyless runtime successfully made one application model request.

The account's INR 88,716.25 GenAI App Builder credit expires October 27, 2026;
its SKU eligibility is still unverified. One live request completed. The Billing
Reports page still showed ₹0/no rows immediately afterward and warns that usage can
take hours or more than 24 hours to appear. This is not evidence the request was
free or credit-covered. The ₹100 monthly project alert excludes credits and tracks
gross usage, with 50%, 80%, 100% actual and 100% forecast thresholds. It is **not a
hard spending cap**. Firestore records 1 of 10 lifetime Gemini runs used.
**Never reuse the old project's publicly exposed service-account JSON.** See the
[cloud setup and audit](research/gcp-reuse-audit.md).

Requirements:

- An independently authorized Google Cloud project with the necessary billing, API access and IAM permissions. Do not use an employer project or credentials.
- Local example config leaves the model unset. Deployed service uses Gemini 2.5 Flash in `us-central1`; one real request succeeded.
- Local mode: `FAULTSCOPE_AUTH_MODE=file` with an explicitly selected independent OAuth credential file. Never paste credential contents into chat or commit them.
- Cloud Run mode: `FAULTSCOPE_AUTH_MODE=metadata`, an empty credential-file setting and an explicit `FAULTSCOPE_RUNTIME_SERVICE_ACCOUNT` in the configured project. This uses the attached identity, not automatic credential-file discovery.
- Gemini is enabled on Cloud Run for public browser sessions, with a shared Firestore allowance of 10 total runs; local defaults remain disabled.
- Explicit project, location, model, authentication selection and `FAULTSCOPE_MAX_LIVE_RUNS` between 1 and 20.

No default Application Default Credentials discovery is used. Ambient Gemini API-key/custom-endpoint variables cause live configuration to be rejected; use a clean process rather than mixing accounts. Credential files are read only when an explicitly enabled live investigation starts.

Each investigation allows at most six model turns, twelve numerical calls, four function calls in a response, 2,048 output tokens per turn, a bounded serialized context, and a 20-second timeout per model request with SDK retries disabled. The elapsed-time check runs between model turns. The run allowance counts started live investigations, including failures, and **does not reset on restart**. Firestore transactions share this lifetime counter across instances.

**These are workload limits, not a hard currency budget.** The user authorized an INR 100 fallback safety-net budget, but the promotional credit's Vertex AI/Cloud Run SKU coverage is unconfirmed. Usage can bill the payment method if credits do not apply; budget alerts are delayed notifications, not enforcement. The deployed service uses shared Firestore, an HTTPS origin and the attached runtime identity. Public Gemini is limited to ten lifetime runs plus per-IP throttles. Do not tunnel the local development server publicly.

The agent selects from declared tools only. The application validates tool arguments, output structure and cited evidence IDs. This does not establish that every generated interpretation is scientifically justified; an engineer must review the findings. Model thought content is not streamed to the interface. Unknown tools cannot read arbitrary files, execute code, browse the web or control equipment.

## Data contract

Source: Nikolai Helwig, Eliseo Pignanelli and Andreas Schuetze, *Condition monitoring of hydraulic systems*, [UCI dataset](https://archive.ics.uci.edu/dataset/447/condition+monitoring+of+hydraulic+systems), DOI [10.24432/C5CW21](https://doi.org/10.24432/C5CW21), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Experimental data creator: ZeMA. No affiliation or endorsement is implied.

- Archive SHA-256: `24128aad2ee45eea7e6b63ebbd9992cdf25d0483a2cebefbfc13bc69079af1f2`.
- Selected zero-based rows: 0, 314, 629, 944, 1259, 1574, 1889, 2204. These are development examples, not a held-out accuracy benchmark.
- The preparation adapter opens only direct sensor files. It does not open `profile.txt`, derived CE/CP/SE channels or research results containing labels.
- Each sensor retains its documented unit and rate. No synthetic channel is substituted or temperature upsampled to suggest additional observations.
- The generated cache under `.faultscope-data/` is ignored by Git and is not served as a public directory. Raw measurement values are preserved. Display previews and numerical summaries are derived transformations.
- Browser values are the nearest displayed native sample from a min/max preview, not a fabricated interpolation. Evidence windows reference original channel timestamps.
- Imported arbitrary files in the visual concept remain local and do not become inference inputs. The real API currently supports only the prepared public catalog.

The bearing profile uses the Ottawa variable-speed dataset, DOI
[10.17632/v43hmbwxpm.1](https://doi.org/10.17632/v43hmbwxpm.1), CC BY 4.0, and the
apparatus description in [10.1016/j.dib.2018.11.019](https://doi.org/10.1016/j.dib.2018.11.019).
Three development trials are prepared with publisher SHA-256 verification. The
adapter loads only Channel_1/Channel_2 and exposes VIB_RAW/ENC_RAW. Amplitude
calibration is unresolved; **encoder output is not RPM**. Spectrum peaks are not
defect frequencies or diagnoses. The bearing model is original source-informed
reference geometry, not exact CAD; animation is illustrative, not measured speed.
See [backend/bearings.py](backend/bearings.py) for pinned provenance.

## Endpoints

| Endpoint | Purpose |
| --- | --- |
| `GET /api/health` | Process health without model calls |
| `GET /api/session` | Create/read an HTTP-only browser session and CSRF token |
| `POST /api/session/login` | Validate an invite and rotate the session/CSRF token |
| `POST /api/session/logout` | Revoke the current session |
| `GET /api/capabilities` | Data readiness, mode availability and configured live-run allowance |
| `GET /api/recordings` | Opaque recording IDs and source provenance |
| `GET /api/recordings/{id}` | Native metadata, measured summaries and min/max waveform previews |
| `POST /api/evidence` | Reviewer-requested numerical evidence, without a model call |
| `POST /api/investigations` | SSE stream for `{recording_id, mode: tools or gemini, challenge_of: optional completed ID}` |
| `GET /api/investigations` | Latest 50 investigations owned by the browser session |
| `GET /api/investigations/{id}` | Persistent completed packet, restricted to its owner |
| `POST /api/investigations/{id}/review` | Save a reviewer decision and note with CSRF verification |

Stream events have a sequence number, investigation ID, recording ID and mode. Errors are explicit and are not replaced by a scripted success. A challenge is a new, bounded Gemini investigation of a completed finding for the same recording; it does not automatically reverse the conclusion. Local numerical replay is not labeled as an AI challenge.

Reports and saved reviews survive restart. Browser sessions expire after eight hours;
signing out ends access to that anonymous browser identity. Reviewer names are
self-reported, not verified identities. Export important work before session expiry.
Cloud reports are hidden after seven days; configured Firestore TTL removes expired
documents asynchronously. SQLite removes old runs during subsequent reservations.
Cancelling a stream can leave a model request running until timeout and does not
refund charges. Exports do not send email or create work orders.

## Deployment status

[Dockerfile](Dockerfile) runs as a non-root user and includes only application code,
licensed assets and prepared public data. [.dockerignore](.dockerignore) and
[.gcloudignore](.gcloudignore) exclude credentials, local state, tools and raw downloads.
The Cloud SDK upload-manifest check confirmed that only the five prepared data
files are included. Docker is unavailable locally; the image was built remotely
with Cloud Build and pushed to Artifact Registry.

[tools/deploy.ps1](tools/deploy.ps1) defaults to a no-cloud-write dry run:

```powershell
.\tools\deploy.ps1
.\.venv\Scripts\python.exe -m backend.preflight --cloud --live
```

The second command reports local-environment blockers unless deployment settings
are supplied; it makes no cloud requests. `-FallbackBudgetINR 100` verifies the
existing project alert and records the owner's fallback authorization. It does not
confirm promotional eligibility or make the alert a hard cap.

The service is deployed at https://faultscope-53fcf2hofa-uc.a.run.app/, revision
`faultscope-00003-mqg`. It has zero minimum instances, one maximum instance,
concurrency two and a ten-run shared lifetime allowance (one used). The Docker
image is `us-central1-docker.pkg.dev/faultscope-torqueshift-2026/faultscope/workspace:20261002214814`.
[firestore.indexes.json](firestore.indexes.json) records the owner/history index
and TTL requirements. The deployment script remains dry-run by default; explicitly
use `-FallbackBudgetINR 100 -LiveRuns 10` when reviewing a subsequent revision.
The alert cannot enforce a currency ceiling.

The current default SQLite app is local. To test Firestore locally, run Google's
emulator on `127.0.0.1:8088`, use an explicit test project and set
`FIRESTORE_EMULATOR_HOST` for the test process only. The workspace has a verified
local Temurin JRE 25 and Firestore emulator 1.22.0 under ignored `.tools`; system
Java and global profiles were not changed. Real Firestore additionally requires
`FAULTSCOPE_ALLOW_CLOUD_STATE=1` and explicit attached credentials.

## Verify

```powershell
.\.venv\Scripts\python.exe -m unittest discover -s tests -v
.\.venv\Scripts\python.exe -m backend.preflight
```

Tests cover both native-rate datasets, known-frequency spectra, transient statistics,
record-specific windows, sessions/CSRF, report ownership, reviews, atomic lifetime
allowances, cross-instance Firestore history and explicit cloud funding gates.
Firestore integration tests run only when `FIRESTORE_EMULATOR_HOST=127.0.0.1:8088`;
otherwise they are skipped. Agent tests use mocked SDK responses, not a live model.

All 11 actual recordings completed the numerical workflow. Browser checks covered
both equipment profiles, nonblank desktop/mobile WebGL pixels and screenshots,
native sensor/spectral views, manual windows, saved notes and history after reload.
Native browser download/print delivery and model diagnostic accuracy remain unverified.

## Scope still to implement

Remaining gates: confirm promotional SKU coverage and review delayed billing
line-items for the real run, test bearing Gemini behavior, evaluate diagnostic
performance, review production security/monitoring, complete independent
engineering validation and submission artifacts. The interface is not a calibrated
digital twin and the model has no established diagnostic accuracy.
Code-release licensing must be selected before publication. Third-party browser
licenses are recorded in [assets/THIRD_PARTY.md](assets/THIRD_PARTY.md).