import argparse
import json
import os

from backend.gemini import GeminiSettings, validate_authentication
from backend.recordings import RecordingLibrary


def check(cloud=False, live=False):
    errors = []
    profiles = {}
    try:
        library = RecordingLibrary()
        for record in library.catalog():
            library.get(record["id"])
            profiles[record["profile"]] = profiles.get(record["profile"], 0) + 1
        if profiles != {"hydraulic": 8, "bearing": 3}:
            errors.append("Prepare the eight hydraulic and three bearing development recordings")
    except (ValueError, OSError, KeyError):
        errors.append("Public recording preparation or checksum validation failed")
    if cloud:
        if os.environ.get("FAULTSCOPE_ALLOW_CLOUD_STATE") != "1":
            errors.append("Cloud-state usage is not approved; confirm credit coverage or an explicit budget")
        if os.environ.get("FAULTSCOPE_STATE_BACKEND") != "firestore":
            errors.append("Cloud deployment requires shared Firestore state")
        if not os.environ.get("FAULTSCOPE_PUBLIC_ORIGIN", "").startswith("https://"):
            errors.append("Set the deployed HTTPS origin")
        if len(os.environ.get("FAULTSCOPE_INVITE_CODE", "")) < 20:
            errors.append("Provision a strong invite code through Secret Manager")
        if os.environ.get("FIRESTORE_EMULATOR_HOST"):
            errors.append("Remove the local emulator override before deployment")
        try:
            validate_authentication("metadata", "", os.environ.get("FAULTSCOPE_RUNTIME_SERVICE_ACCOUNT", ""), os.environ.get("FAULTSCOPE_GCP_PROJECT", ""), os.environ)
        except ValueError:
            errors.append("Configure the explicit attached runtime identity")
    if live:
        try:
            settings = GeminiSettings.from_environment()
            if not settings.enabled:
                errors.append("Live AI remains disabled; funding and an explicit model selection are required")
        except ValueError as error:
            errors.append(str(error))
    return {"ready": not errors, "profiles": profiles, "cloud_requested": cloud, "live_requested": live,
            "network_requests": 0, "model_calls": 0, "blockers": errors}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Check FaultScope readiness without any cloud or model requests")
    parser.add_argument("--cloud", action="store_true")
    parser.add_argument("--live", action="store_true")
    options = parser.parse_args()
    result = check(options.cloud, options.live)
    print(json.dumps(result, indent=2))
    raise SystemExit(0 if result["ready"] else 1)