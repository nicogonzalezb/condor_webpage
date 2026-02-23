# Condor Web — para EasyPanel y Docker
# Build context: raíz del repo (webpage/)

# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/web/package.json ./apps/web/package.json
COPY apps/studio/package.json ./apps/studio/package.json

RUN npm install --prefer-offline

COPY apps/web ./apps/web
COPY brand ./brand
COPY copy ./copy
COPY case-studies ./case-studies

WORKDIR /app/apps/web
RUN REPO_ROOT=/app npm run build

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/apps/web/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web/package.json ./package.json
COPY --from=builder /app/brand ./brand
COPY --from=builder /app/copy ./copy
COPY --from=builder /app/case-studies ./case-studies

ENV PORT=3000
ENV HOST=0.0.0.0
ENV REPO_ROOT=/app
EXPOSE 3000

CMD ["node", "dist/server/entry.mjs"]
