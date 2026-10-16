import argparse
from collections import OrderedDict
import hashlib
import json
from pathlib import Path
import threading

import httpx
import numpy as np
from scipy.io import loadmat

from backend.recordings import ROOT, BEARING_SENSORS, minmax_points


DEFAULT_BEARINGS = ROOT / ".faultscope-data" / "bearing"
SOURCE = {"doi": "10.17632/v43hmbwxpm.1", "paper_doi": "10.1016/j.dib.2018.11.019", "license": "CC-BY-4.0", "url": "https://data.mendeley.com/datasets/v43hmbwxpm/1"}
SOURCE_FILES = (
    ("5aa2ec96-ba06-4b64-b6bf-92c805c90ac5", "a113089dac7969eaf3e2adc563aa724a523f5d7ef4b3dd957bdf111ac1d84257"),
    ("92bd5694-07ff-4b89-8b9b-5fc20f12954d", "496a14c3caf62d28169ff2567e9aaf5c7913c03c648ad73651b410cd09316ea7"),
    ("9760929d-b46f-4744-a36a-26b11b02d1af", "f07716f39f8fb93ea73465e40dc415b0252eefcf5797591b079139ce66ff1040"),
)


def digest(path):
    with Path(path).open("rb") as source:
        return hashlib.file_digest(source, "sha256").hexdigest()


def measured_channels(payload):
    result = {}
    for original, channel in (("Channel_1", "VIB_RAW"), ("Channel_2", "ENC_RAW")):
        values = payload.get(original)
        if not isinstance(values, np.ndarray) or values.shape != (2_000_000, 1) or values.dtype.kind != "f":
            raise ValueError("Unexpected bearing channel shape or data type")
        if not np.isfinite(values).all() or np.ptp(values) <= 0:
            raise ValueError("Bearing channel is not finite and nonconstant")
        result[channel] = values[:, 0]
    return result


def prepare_bearings(destination=DEFAULT_BEARINGS):
    destination = Path(destination)
    raw_directory = destination / "raw"
    raw_directory.mkdir(parents=True, exist_ok=True)
    records = []
    for index, (file_id, expected) in enumerate(SOURCE_FILES, 1):
        raw = raw_directory / f"{file_id}.mat"
        if not raw.is_file() or digest(raw) != expected:
            url = f"https://data.mendeley.com/public-files/datasets/v43hmbwxpm/files/{file_id}/file_downloaded"
            with httpx.stream("GET", url, follow_redirects=True, timeout=90) as response:
                response.raise_for_status()
                with raw.open("wb") as target:
                    for chunk in response.iter_bytes():
                        target.write(chunk)
        if digest(raw) != expected:
            raise ValueError("Bearing download does not match the pinned publisher checksum")
        channels = measured_channels(loadmat(raw, variable_names=["Channel_1", "Channel_2"]))
        identifier = "rot-" + expected[:12]
        cache = destination / f"{identifier}.npz"
        np.savez_compressed(cache, **channels)
        records.append({"id": identifier, "name": f"Bearing recording {index:02d}", "duration_s": 10, "profile": "bearing", "channels": 2,
                        "source_sha256": expected, "cache_sha256": digest(cache)})
    manifest = {"schema_version": 1, "source": SOURCE, "records": records,
                "selection": "Three development trials, not an independent benchmark. Condition labels and source filenames are not supplied to inference."}
    (destination / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    return manifest


class BearingStore:
    def __init__(self, directory=DEFAULT_BEARINGS):
        self.directory = Path(directory)
        self.cache = OrderedDict()
        self.lock = threading.RLock()
        manifest = json.loads((self.directory / "manifest.json").read_text(encoding="utf-8"))
        if manifest.get("schema_version") != 1 or manifest.get("source") != SOURCE:
            raise ValueError("Unsupported bearing data manifest")
        self.source = SOURCE
        expected = {"rot-" + checksum[:12]: checksum for _file_id, checksum in SOURCE_FILES}
        self.records = {record["id"]: record for record in manifest["records"]}
        if set(self.records) != set(expected) or any(record["source_sha256"] != expected[identifier] for identifier, record in self.records.items()):
            raise ValueError("Unrecognized bearing recordings")

    def catalog(self):
        return [{key: record[key] for key in ("id", "name", "duration_s", "profile", "channels")} for record in self.records.values()]

    def get(self, recording_id):
        with self.lock:
            if recording_id not in self.cache:
                self.cache[recording_id] = self.load(recording_id)
                while len(self.cache) > 2:
                    self.cache.popitem(last=False)
            self.cache.move_to_end(recording_id)
            return self.cache[recording_id]

    def load(self, recording_id):
        record = self.records[recording_id]
        path = self.directory / f"{recording_id}.npz"
        if digest(path) != record["cache_sha256"]:
            raise ValueError("Bearing cache checksum mismatch")
        with np.load(path, allow_pickle=False) as archive:
            arrays = measured_channels({"Channel_1": archive["VIB_RAW"].reshape(-1, 1), "Channel_2": archive["ENC_RAW"].reshape(-1, 1)})
        return {"id": recording_id, "duration_s": 10, "profile": "bearing", "channels": {channel: {**spec, "values": arrays[channel]} for channel, spec in BEARING_SENSORS.items()}}

    def describe(self, recording_id, include_waveforms=False):
        record = self.records[recording_id]
        channels = [{"id": channel, **spec, "sample_count": 2_000_000} for channel, spec in BEARING_SENSORS.items()]
        if include_waveforms:
            measured = self.get(recording_id)
            for channel in channels:
                channel["points"] = minmax_points(measured["channels"][channel["id"]]["values"], channel["rate_hz"])
        return {**{key: record[key] for key in ("id", "name", "duration_s", "profile")}, "channels": channels, "source": SOURCE | {"sha256": record["source_sha256"]},
                "display_method": "Peak-preserving native-timestamp envelope; at most 400 display points per channel",
                "boundary": "Experimental variable-speed bearing rig. Amplitude calibration and encoder-to-RPM conversion are not established. Reference geometry is not calibrated CAD. No fault label is supplied."}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Prepare three checksum-verified public bearing recordings")
    parser.add_argument("--output", type=Path, default=DEFAULT_BEARINGS)
    arguments = parser.parse_args()
    result = prepare_bearings(arguments.output)
    print(f"Prepared {len(result['records'])} public bearing recordings at {arguments.output}")