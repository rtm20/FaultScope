import hashlib
import json
import math

import numpy as np
from pydantic import BaseModel, ConfigDict, Field, model_validator
from scipy.signal import find_peaks, welch

from backend.recordings import SENSORS, BEARING_SENSORS, RecordingStore


TOOL_VERSION = "2.0.0"
KNOWN_CHANNELS = SENSORS | BEARING_SENSORS


class Window(BaseModel):
    model_config = ConfigDict(extra="forbid", allow_inf_nan=False, validate_default=True)
    channel: str
    start_s: float = Field(default=0, ge=0, lt=60)
    end_s: float | None = Field(default=None, gt=0, le=60)

    @model_validator(mode="after")
    def check_window(self):
        if self.channel not in KNOWN_CHANNELS or (self.end_s is not None and self.start_s >= self.end_s):
            raise ValueError("Unknown channel or invalid time window")
        return self


class WindowComparison(Window):
    reference_start_s: float = Field(default=0, ge=0, lt=60)
    reference_end_s: float = Field(default=20, gt=0, le=60)

    @model_validator(mode="after")
    def check_reference(self):
        if self.reference_start_s >= self.reference_end_s:
            raise ValueError("Invalid reference time window")
        return self


class ChannelComparison(Window):
    other_channel: str

    @model_validator(mode="after")
    def check_other(self):
        if self.other_channel not in KNOWN_CHANNELS or self.other_channel == self.channel:
            raise ValueError("Provide two distinct known channels")
        return self


TOOL_ARGUMENTS = {
    "summarize_signal": Window,
    "compare_windows": WindowComparison,
    "compare_channels": ChannelComparison,
    "spectral_summary": Window,
    "transient_summary": Window,
}


def values_in_window(record, channel, start_s, end_s):
    if channel not in record["channels"] or not 0 <= start_s < end_s <= record.get("duration_s", 60):
        raise ValueError("Channel or window is outside this recording")
    spec = record["channels"][channel]
    start_index = math.ceil(start_s * spec["rate_hz"])
    end_index = math.ceil(end_s * spec["rate_hz"])
    values = np.asarray(spec["values"][start_index:end_index], dtype=float)
    if len(values) < 2:
        raise ValueError("At least two measured samples are required")
    return values


def summarize(values):
    return {
        "samples": len(values),
        "min": float(values.min()), "max": float(values.max()),
        "mean": float(values.mean()), "std": float(values.std()),
        "rms": float(np.sqrt(np.mean(np.square(values)))),
    }


def spectrum(values, rate, unit):
    if len(values) < 32:
        raise ValueError("At least 32 native samples are required for a spectrum")
    frequencies, power = welch(values, fs=rate, nperseg=min(8192, len(values)), detrend="constant", scaling="density")
    candidates, _properties = find_peaks(power)
    strongest = sorted(candidates, key=lambda index: power[index], reverse=True)[:5]
    display = sorted(set(np.linspace(0, len(frequencies) - 1, 220, dtype=int)) | set(strongest))
    return {"method": "Welch PSD, Hann window, 50 percent overlap, mean detrended", "samples": len(values),
            "frequency_resolution_hz": float(frequencies[1] - frequencies[0]), "nyquist_hz": rate / 2,
            "power_unit": f"{unit} squared/Hz", "peaks": [{"frequency_hz": float(frequencies[index]), "power_density": float(power[index])} for index in strongest],
            "spectrum": [[float(frequencies[index]), float(power[index])] for index in display],
            "interpretation_limit": "Spectral energy is not a defect classification. Variable speed can smear peaks; shaft speed and defect frequencies are not established."}


def transients(values, request, rate):
    centered = values - values.mean()
    rms = float(np.sqrt(np.mean(centered ** 2)))
    variance = float(centered.var())
    offset = request.start_s
    segments = []
    for segment in np.array_split(values, min(12, len(values) // 2)):
        end = offset + len(segment) / rate
        segments.append({"start_s": offset, "end_s": end, "rms": float(np.sqrt(np.mean(segment ** 2)))})
        offset = end
    return {"samples": len(values), "centered_rms": rms,
            "crest_factor": float(np.abs(centered).max() / rms) if rms else None,
            "pearson_kurtosis": float(np.mean(centered ** 4) / variance ** 2) if variance else None,
            "segments": segments, "interpretation_limit": "Descriptive statistics only; no validated alarm threshold or causal component attribution."}


def compare_record_channels(record, request):
    names = (request.channel, request.other_channel)
    if any(name not in record["channels"] for name in names):
        raise ValueError("Channel is not present in this recording")
    common_rate = min(record["channels"][name]["rate_hz"] for name in names)
    first_bin = math.ceil(request.start_s * common_rate)
    last_bin = math.floor(request.end_s * common_rate)
    arrays = []
    for name in names:
        spec = record["channels"][name]
        if spec["rate_hz"] % common_rate:
            raise ValueError("Channel rates require unsupported alignment")
        factor = spec["rate_hz"] // common_rate
        raw = np.asarray(spec["values"], dtype=float)
        arrays.append(raw[:len(raw) // factor * factor].reshape(-1, factor).mean(axis=1)[first_bin:last_bin])
    if len(arrays[0]) < 3:
        raise ValueError("At least three shared time bins are required")
    return {"channels": list(names), "units": [record["channels"][name]["unit"] for name in names],
            "aligned_bins": len(arrays[0]), "bin_rate_hz": common_rate,
            "pearson_r": float(np.corrcoef(*arrays)[0, 1]) if all(array.std() > 0 for array in arrays) else None,
            "alignment": "Non-overlapping mean bins at the slower native sampling rate; complete bins only",
            "interpretation_limit": "Correlation is not proof of causation or a component diagnosis."}


def calculate(record, tool, request):
    spec = record["channels"][request.channel]
    values = values_in_window(record, request.channel, request.start_s, request.end_s)
    if tool == "summarize_signal":
        return {"unit": spec["unit"], **summarize(values)}
    if tool == "compare_windows":
        reference = values_in_window(record, request.channel, request.reference_start_s, request.reference_end_s)
        return {"unit": spec["unit"], "selected": summarize(values), "reference": summarize(reference),
                "mean_difference": float(values.mean() - reference.mean()),
                "interpretation_limit": "A within-recording difference is not a fault threshold or a healthy baseline."}
    if tool == "compare_channels":
        return compare_record_channels(record, request)
    if tool == "spectral_summary":
        return spectrum(values, spec["rate_hz"], spec["unit"])
    return {"unit": spec["unit"], **transients(values, request, spec["rate_hz"])}


class EvidenceSession:
    def __init__(self, store: RecordingStore, recording_id: str):
        self.record = store.get(recording_id)
        self.recording_id = recording_id
        self.evidence = {}

    def run(self, tool, arguments):
        if tool not in TOOL_ARGUMENTS:
            raise ValueError("Unknown analysis tool")
        request = TOOL_ARGUMENTS[tool].model_validate(arguments)
        if request.end_s is None:
            request.end_s = float(self.record.get("duration_s", 60))
        if request.channel not in self.record["channels"]:
            raise ValueError("Channel is not present in this recording")
        parameters = request.model_dump()
        channel = request.channel
        result = calculate(self.record, tool, request)
        signature = json.dumps({"record": self.recording_id, "tool": tool, "version": TOOL_VERSION, "parameters": parameters}, sort_keys=True)
        identifier = "ev-" + hashlib.sha256(signature.encode()).hexdigest()[:16]
        evidence = {
            "id": identifier, "recording_id": self.recording_id,
            "tool": tool, "tool_version": TOOL_VERSION,
            "parameters": parameters, "result": result,
            "source": {"channel": channel, "rate_hz": self.record["channels"][channel]["rate_hz"], "window_s": [request.start_s, request.end_s]},
        }
        self.evidence[identifier] = evidence
        return evidence


def local_review(session):
    if session.record.get("profile") == "bearing":
        yield from bearing_review(session)
        return
    summaries = []
    for channel in ("PS1", "FS1", "TS1"):
        summaries.append(session.run("summarize_signal", {"channel": channel}))
        yield {"type": "evidence", "evidence": summaries[-1], "message": f"Calculated {channel} statistics from measured samples"}
    difference = session.run("compare_windows", {"channel": "PS1", "start_s": 20, "end_s": 40})
    yield {"type": "evidence", "evidence": difference, "message": "Compared two pressure windows; no fault threshold applied"}
    correlation = session.run("compare_channels", {"channel": "PS1", "other_channel": "FS1"})
    yield {"type": "evidence", "evidence": correlation, "message": "Compared pressure and flow using shared time bins"}
    observations = [{
        "text": f"{entry['source']['channel']} mean: {entry['result']['mean']:.3f} {entry['result']['unit']} across {entry['result']['samples']} measured samples.",
        "evidence_ids": [entry["id"]],
    } for entry in summaries]
    yield {"type": "finding", "finding": {
        "title": "Real measurements. No AI diagnosis yet.",
        "summary": "Signal statistics and comparisons are ready for review. This fixed numerical workflow does not identify a faulty component.",
        "disposition": "observation_only", "observations": observations,
        "uncertainties": ["No validated equipment-specific thresholds", "Physical sensor placement not verified", "No causal fault attribution"],
        "next_step": "engineer_review", "author": "deterministic_tools",
    }}


def bearing_review(session):
    summaries = []
    for channel in BEARING_SENSORS:
        evidence = session.run("summarize_signal", {"channel": channel})
        summaries.append(evidence)
        yield {"type": "evidence", "evidence": evidence, "message": f"Measured {channel} at its original sampling rate"}
    for tool in ("spectral_summary", "transient_summary"):
        evidence = session.run(tool, {"channel": "VIB_RAW"})
        yield {"type": "evidence", "evidence": evidence, "message": f"Computed {tool.replace('_', ' ')}; no fault threshold applied"}
    duration = session.record["duration_s"]
    evidence = session.run("compare_windows", {"channel": "VIB_RAW", "start_s": duration / 2, "end_s": duration, "reference_end_s": duration / 2})
    yield {"type": "evidence", "evidence": evidence, "message": "Compared first and second halves of the vibration recording"}
    yield {"type": "finding", "finding": {
        "title": "Bearing evidence is ready for review.",
        "summary": "Native-rate statistics, spectral energy and transient measurements are available. This numerical review does not classify bearing defects or estimate shaft speed.",
        "disposition": "observation_only", "author": "deterministic_tools", "next_step": "engineer_review",
        "observations": [{"text": f"{entry['source']['channel']}: RMS {entry['result']['rms']:.5f} in recorded units, from {entry['result']['samples']} samples.", "evidence_ids": [entry["id"]]} for entry in summaries],
        "uncertainties": ["Amplitude calibration not established", "Encoder output is not calibrated RPM", "No validated defect-frequency or fault-classification model"],
    }}