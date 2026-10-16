FROM node:22-bookworm-slim AS frontend

WORKDIR /ui
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY frontend/ ./
RUN npm run build

FROM python:3.13-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    FAULTSCOPE_ENABLE_GEMINI=0 \
    FAULTSCOPE_ALLOW_PAID_REQUESTS=0 \
    FAULTSCOPE_ALLOW_CLOUD_STATE=0

WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ ./backend/
COPY assets/ ./assets/
COPY --from=frontend /ui/dist ./frontend/dist/
COPY faultscope-demo.html ./
COPY .faultscope-data/hydraulic.json ./.faultscope-data/hydraulic.json
COPY .faultscope-data/bearing/manifest.json ./.faultscope-data/bearing/manifest.json
COPY .faultscope-data/bearing/*.npz ./.faultscope-data/bearing/
RUN mkdir -p /app/.faultscope-state && chown 10001:10001 /app/.faultscope-state
USER 10001:10001
EXPOSE 8080
CMD ["sh", "-c", "exec python -m uvicorn backend.app:app --host 0.0.0.0 --port ${PORT:-8080} --workers 1 --proxy-headers --forwarded-allow-ips='*'"]