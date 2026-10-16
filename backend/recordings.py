import argparse
import hashlib
import json
from pathlib import Path
import zipfile

import numpy as np


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_STORE = ROOT / ".faultscope-data" / "hydraulic.json"
SOURCE_URL = "https://archive.ics.uci.edu/static/public/447/condition+monitoring+of+hydraulic+systems.zip"
SOURCE_SHA256 = "24128aad2ee45eea7e6b63ebbd9992cdf25d0483a2cebefbfc13bc69079af1f2"
SOURCE_DOI = "10.24432/C5CW21"
SELECTED_ROWS = (0, 314, 629, 944, 1259, 1574, 1889, 2204)
SENSORS = {
    **{f"PS{index}": {"quantity": "Pressure", "unit": "bar", "rate_hz": 100} for index in range(1, 7)},
    "EPS1": {"quantity": "Motor power", "unit": "W", "rate_hz": 100},
    "FS1": {"quantity": "Volume flow", "unit": "L/min", "rate_hz": 10},
    "FS2": {"quantity": "Volume flow", "unit": "L/min", "rate_hz": 10},
    **{f"TS{index}": {"quantity": "Temperature", "unit": "C", "rate_hz": 1} for index in range(1, 5)},
    "VS1": {"quantity": "Vibration velocity", "unit": "mm/s", "rate_hz": 1},
}
BEARING_SENSORS = {
    "VIB_RAW": {"quantity": "Vibration sensor output", "unit": "recorded units", "rate_hz": 200_000},
    "ENC_RAW": {"quantity": "Encoder output", "unit": "recorded units", "rate_hz": 200_000},
}


def selected_channel_rows(archive, channel, rows):
    sensor = SENSORS[channel]
    required = set(rows)
    found = {}
    with archive.open(f"{channel}.txt") as source:
        for index, line in enumerate(source):
            if index in required:
                values = np.fromstring(line.decode("ascii"), sep="\t", dtype=np.float64)
                if len(values) != sensor["rate_hz"] * 60 or not np.isfinite(values).all():
                    raise ValueError(f"Invalid {channel} recording at row {index}")
                found[index] = values.tolist()
            if index >= max(required):
                break
    if set(found) != required:
        raise ValueError(f"Missing {channel} recordings")
    return found


def prepare_archive(archive_path, output=DEFAULT_STORE):
    archive_path = Path(archive_path)
    digest = hashlib.sha256(archive_path.read_bytes()).hexdigest()
    if digest != SOURCE_SHA256:
        raise ValueError("Archive does not match the pinned UCI SHA-256")
    records = []
    for index, row in enumerate(SELECTED_ROWS):
        records.append({
            "id": "hyd-" + hashlib.sha256(f"{digest}:{row}".encode()).hexdigest()[:12],
            "name": f"Public recording {index + 1:02d}",
            "duration_s": 60,
            "channels": {},
        })
    with zipfile.ZipFile(archive_path) as archive:
        for channel in SENSORS:
            values = selected_channel_rows(archive, channel, SELECTED_ROWS)
            for record, row in zip(records, SELECTED_ROWS, strict=True):
                record["channels"][channel] = {**SENSORS[channel], "values": values[row]}
    payload = {
        "schema_version": 1,
        "source": {"doi": SOURCE_DOI, "sha256": digest, "url": SOURCE_URL, "license": "CC-BY-4.0"},
        "selection": "Eight evenly spaced archive rows; no condition labels inspected. Development examples, not a held-out benchmark.",
        "records": records,
    }
    output = Path(output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(payload, allow_nan=False, separators=(",", ":")), encoding="utf-8")
    return payload


def minmax_points(values, rate_hz, max_points=400):
    samples = np.asarray(values, dtype=float)
    if max_points < 4 or not len(samples) or rate_hz <= 0 or not np.isfinite(samples).all():
        raise ValueError("Invalid waveform request")
    if len(samples) <= max_points:
        indices = np.arange(len(samples))
    else:
        selected = {0, len(samples) - 1}
        for bucket in np.array_split(np.arange(len(samples)), (max_points - 2) // 2):
            selected.add(int(bucket[np.argmin(samples[bucket])]))
            selected.add(int(bucket[np.argmax(samples[bucket])]))
        indices = np.array(sorted(selected))
    return [[float(index / rate_hz), float(samples[index])] for index in indices]


class RecordingStore:
    def __init__(self, path=DEFAULT_STORE):
        payload = json.loads(Path(path).read_text(encoding="utf-8"))
        if payload.get("schema_version") != 1 or payload.get("source", {}).get("sha256") != SOURCE_SHA256:
            raise ValueError("Unsupported recording store")
        self.source = payload["source"]
        self.records = {record["id"]: record for record in payload["records"]}
        if not self.records or len(self.records) != len(payload["records"]):
            raise ValueError("Empty or duplicate recording IDs")
        for record in self.records.values():
            self.validate_record(record)

    @staticmethod
    def validate_record(record):
        if set(record["channels"]) != set(SENSORS) or record["duration_s"] != 60:
            raise ValueError("Unexpected sensor channels or recording duration")
        for channel, spec in SENSORS.items():
            actual = record["channels"][channel]
            values = actual["values"]
            if any(actual.get(key) != value for key, value in spec.items()):
                raise ValueError("Sensor metadata mismatch")
            if len(values) != spec["rate_hz"] * 60 or not np.isfinite(values).all():
                raise ValueError("Invalid stored samples")

    def get(self, recording_id):
        if recording_id not in self.records:
            raise KeyError("Unknown recording")
        return self.records[recording_id]

    def catalog(self):
        return [{"id": record["id"], "name": record["name"], "duration_s": 60, "channels": len(SENSORS), "profile": "hydraulic"} for record in self.records.values()]

    def describe(self, recording_id, include_waveforms=False):
        record = self.get(recording_id)
        channels = []
        for channel, spec in SENSORS.items():
            entry = {"id": channel, **spec, "sample_count": len(record["channels"][channel]["values"])}
            if include_waveforms:
                entry["points"] = minmax_points(record["channels"][channel]["values"], spec["rate_hz"])
            channels.append(entry)
        return {
            "id": record["id"], "name": record["name"], "duration_s": 60, "profile": "hydraulic",
            "channels": channels, "source": self.source,
            "display_method": "Time-ordered bucket minimum/maximum; native timestamps; at most 400 points per channel",
            "boundary": "Single experimental rig. Physical sensor placement and fault causation are not established by a signal statistic.",
        }


class RecordingLibrary:
    def __init__(self):
        from backend.bearings import BearingStore, DEFAULT_BEARINGS

        self.stores = []
        if DEFAULT_STORE.is_file():
            self.stores.append(RecordingStore())
        if (DEFAULT_BEARINGS / "manifest.json").is_file():
            self.stores.append(BearingStore())
        if not self.stores:
            raise ValueError("No prepared public datasets")
        self.index = {entry["id"]: store for store in self.stores for entry in store.catalog()}
        self.source = {"datasets": [store.source for store in self.stores]}

    def get(self, recording_id):
        return self.index[recording_id].get(recording_id)

    def describe(self, recording_id, include_waveforms=False):
        return self.index[recording_id].describe(recording_id, include_waveforms)

    def catalog(self):
        return [entry for store in self.stores for entry in store.catalog()]


def main():
    parser = argparse.ArgumentParser(description="Prepare real UCI recordings without reading fault labels")
    parser.add_argument("--archive", type=Path, required=True)
    parser.add_argument("--output", type=Path, default=DEFAULT_STORE)
    args = parser.parse_args()
    result = prepare_archive(args.archive, args.output)
    print(f"Prepared {len(result['records'])} recordings, {len(SENSORS)} direct channels each: {args.output}")


if __name__ == "__main__":
    main()