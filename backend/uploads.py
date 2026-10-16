import hashlib
import json
from typing import Literal

import numpy as np
from pydantic import BaseModel, ConfigDict, Field, model_validator

from backend.recordings import BEARING_SENSORS, SENSORS, minmax_points


class UploadedRecording(BaseModel):
    model_config = ConfigDict(extra="forbid", allow_inf_nan=False)
    name: str = Field(min_length=1, max_length=80)
    profile: Literal["hydraulic", "bearing"]
    duration_s: float = Field(gt=0, le=60)
    channels: dict[str, list[float]] = Field(min_length=1, max_length=14)

    @model_validator(mode="after")
    def validate_measurements(self):
        sensors = SENSORS if self.profile == "hydraulic" else BEARING_SENSORS
        required = {"PS1", "FS1", "TS1"} if self.profile == "hydraulic" else set(BEARING_SENSORS)
        if not required <= self.channels.keys() or not self.channels.keys() <= sensors.keys():
            raise ValueError("Include required channels for this profile; extra or cross-profile channel names are not accepted")
        total = 0
        for channel, values in self.channels.items():
            if len(values) < 2 or len(values) > 200_000:
                raise ValueError(f"{channel} must contain 2 to 200,000 finite samples")
            rate = sensors[channel]["rate_hz"]
            duration = len(values) / rate
            if abs(duration - self.duration_s) > 1 / rate:
                raise ValueError(f"{channel} sample count does not match its native rate and recording duration")
            total += len(values)
        if total > 250_000:
            raise ValueError("Upload exceeds the 250,000-sample aggregate limit")
        if self.profile == "hydraulic" and self.duration_s < 40:
            raise ValueError("Hydraulic engineering review requires at least a 40-second recording")
        return self


class UploadedRecordingStore:
    def __init__(self, upload: UploadedRecording):
        payload = upload.model_dump()
        canonical = json.dumps(payload, sort_keys=True, separators=(",", ":"), allow_nan=False)
        digest = hashlib.sha256(canonical.encode()).hexdigest()
        self.identifier = "usr-" + digest[:16]
        self.source = {"origin": "user-upload", "filename": upload.name, "sha256": digest,
                       "license": "user-supplied; not independently verified"}
        sensors = SENSORS if upload.profile == "hydraulic" else BEARING_SENSORS
        self.record = {
            "id": self.identifier, "name": upload.name, "profile": upload.profile,
            "duration_s": float(upload.duration_s), "uploaded": True, "source": self.source,
            "channels": {channel: {**sensors[channel], "values": np.asarray(values, dtype=np.float64)} for channel, values in upload.channels.items()},
        }

    def get(self, identifier):
        if identifier != self.identifier:
            raise KeyError("Unknown ephemeral upload")
        return self.record

    def describe(self, identifier, include_waveforms=False):
        record = self.get(identifier)
        channels = []
        for channel, spec in record["channels"].items():
            values = spec["values"]
            entry = {"id": channel, "quantity": spec["quantity"], "unit": spec["unit"],
                     "rate_hz": spec["rate_hz"], "sample_count": len(values),
                     "statistics": {"min": float(values.min()), "max": float(values.max()),
                                    "mean": float(values.mean()), "std": float(values.std()), "rms": float(np.sqrt(np.mean(values ** 2)))}}
            if include_waveforms:
                entry["points"] = minmax_points(values, spec["rate_hz"])
            channels.append(entry)
        return {"id": record["id"], "name": record["name"], "profile": record["profile"],
                "duration_s": record["duration_s"], "channels": channels, "source": self.source,
                "display_method": "Peak-preserving native-timestamp preview; uploaded samples processed in memory only",
                "boundary": "User-uploaded recording. The file was not independently verified or retained; sensor calibration and physical placement remain the user's responsibility."}