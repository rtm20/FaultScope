from contextlib import contextmanager
import hashlib
import json
from pathlib import Path
import secrets
import sqlite3
import threading
import time
from uuid import uuid4


class StateStore:
    def __init__(self, path):
        if str(path) != ":memory:":
            Path(path).parent.mkdir(parents=True, exist_ok=True)
        self.connection = sqlite3.connect(str(path), timeout=10, check_same_thread=False)
        self.connection.row_factory = sqlite3.Row
        self.lock = threading.RLock()
        self.connection.executescript("""
            PRAGMA journal_mode=WAL;
            CREATE TABLE IF NOT EXISTS settings (name TEXT PRIMARY KEY, value TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS sessions (
                token_hash TEXT PRIMARY KEY, owner TEXT NOT NULL, csrf TEXT NOT NULL,
                authorized INTEGER NOT NULL DEFAULT 0, expires REAL NOT NULL);
            CREATE TABLE IF NOT EXISTS runs (
                id TEXT PRIMARY KEY, owner TEXT NOT NULL, recording_id TEXT NOT NULL,
                mode TEXT NOT NULL, status TEXT NOT NULL, created REAL NOT NULL,
                report TEXT, feedback TEXT);
            CREATE INDEX IF NOT EXISTS runs_owner_created ON runs(owner, created DESC);
            CREATE TABLE IF NOT EXISTS counters (name TEXT PRIMARY KEY, value INTEGER NOT NULL);
            CREATE TABLE IF NOT EXISTS attempts (bucket TEXT NOT NULL, created REAL NOT NULL);
            CREATE INDEX IF NOT EXISTS attempts_bucket ON attempts(bucket, created);
        """)

    @contextmanager
    def transaction(self):
        with self.lock:
            self.connection.execute("BEGIN IMMEDIATE")
            try:
                yield self.connection
                self.connection.commit()
            finally:
                if self.connection.in_transaction:
                    self.connection.rollback()

    def close(self):
        with self.lock:
            self.connection.close()

    def secret(self, name):
        with self.transaction() as connection:
            connection.execute("INSERT OR IGNORE INTO settings VALUES (?, ?)", (name, secrets.token_urlsafe(32)))
            return connection.execute("SELECT value FROM settings WHERE name = ?", (name,)).fetchone()[0]

    @staticmethod
    def token_hash(token):
        return hashlib.sha256(token.encode()).hexdigest()

    def new_session(self):
        token = secrets.token_urlsafe(32)
        session = {"owner": uuid4().hex, "csrf": secrets.token_urlsafe(24), "authorized": False, "expires": time.time() + 28_800}
        with self.transaction() as connection:
            connection.execute("DELETE FROM sessions WHERE expires < ?", (time.time(),))
            connection.execute("INSERT INTO sessions VALUES (?, ?, ?, ?, ?)", (self.token_hash(token), *session.values()))
        return token, session

    def session(self, token):
        if not token or len(token) > 128:
            return None
        with self.lock:
            row = self.connection.execute("SELECT owner, csrf, authorized, expires FROM sessions WHERE token_hash = ? AND expires > ?", (self.token_hash(token), time.time())).fetchone()
        return dict(row) if row else None

    def authorize(self, token):
        with self.transaction() as connection:
            row = connection.execute("SELECT owner, expires FROM sessions WHERE token_hash = ? AND expires > ?", (self.token_hash(token), time.time())).fetchone()
            if row is None:
                raise ValueError("Session expired")
            replacement = secrets.token_urlsafe(32)
            session = {"owner": row["owner"], "csrf": secrets.token_urlsafe(24), "authorized": True, "expires": row["expires"]}
            connection.execute("DELETE FROM sessions WHERE token_hash = ?", (self.token_hash(token),))
            connection.execute("INSERT INTO sessions VALUES (?, ?, ?, ?, ?)", (self.token_hash(replacement), *session.values()))
        return replacement, session

    def revoke(self, token):
        with self.transaction() as connection:
            connection.execute("DELETE FROM sessions WHERE token_hash = ?", (self.token_hash(token or ""),))

    def rate_allowed(self, bucket, maximum, window=900):
        now = time.time()
        with self.transaction() as connection:
            connection.execute("DELETE FROM attempts WHERE created < ?", (now - 3600,))
            count = connection.execute("SELECT COUNT(*) FROM attempts WHERE bucket = ? AND created > ?", (bucket, now - window)).fetchone()[0]
            if count >= maximum:
                return False
            connection.execute("INSERT INTO attempts VALUES (?, ?)", (bucket, now))
        return True

    def reserve(self, owner, recording_id, mode, limit):
        identifier = uuid4().hex
        with self.transaction() as connection:
            if mode == "gemini":
                connection.execute("INSERT OR IGNORE INTO counters VALUES ('live_runs', 0)")
                changed = connection.execute("UPDATE counters SET value = value + 1 WHERE name = 'live_runs' AND value < ?", (limit,)).rowcount
                if not changed:
                    raise ValueError("Lifetime live-run allowance exhausted")
            connection.execute("DELETE FROM runs WHERE created < ?", (time.time() - 604_800,))
            connection.execute("INSERT INTO runs(id, owner, recording_id, mode, status, created) VALUES (?, ?, ?, ?, 'running', ?)", (identifier, owner, recording_id, mode, time.time()))
        return identifier

    def used_runs(self):
        with self.lock:
            row = self.connection.execute("SELECT value FROM counters WHERE name = 'live_runs'").fetchone()
        return row[0] if row else 0

    def finish(self, identifier, report=None):
        payload = json.dumps(report, allow_nan=False) if report else None
        with self.transaction() as connection:
            connection.execute("UPDATE runs SET status = ?, report = ? WHERE id = ?", ("completed" if report else "failed", payload, identifier))

    def report(self, identifier, owner):
        with self.lock:
            row = self.connection.execute("SELECT report, feedback FROM runs WHERE id = ? AND owner = ? AND status = 'completed'", (identifier, owner)).fetchone()
        if not row:
            return None
        return json.loads(row["report"]) | {"review": json.loads(row["feedback"]) if row["feedback"] else None}

    def history(self, owner):
        with self.lock:
            rows = self.connection.execute("SELECT id, recording_id, mode, status, created, report, feedback FROM runs WHERE owner = ? ORDER BY created DESC LIMIT 50", (owner,)).fetchall()
        return [{"id": row["id"], "recording_id": row["recording_id"], "mode": row["mode"], "status": row["status"], "created": row["created"],
                 "title": json.loads(row["report"])["finding"]["title"] if row["report"] else "Incomplete investigation",
                 "review": json.loads(row["feedback"]) if row["feedback"] else None} for row in rows]

    def review(self, identifier, owner, feedback):
        with self.transaction() as connection:
            return connection.execute("UPDATE runs SET feedback = ? WHERE id = ? AND owner = ? AND status = 'completed'", (json.dumps(feedback), identifier, owner)).rowcount == 1