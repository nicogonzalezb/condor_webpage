# IMPORTANT: Build context must be the monorepo root (webpage/)
# Run from webpage/ directory:
#   docker build -f apps/web/Dockerfile -t condor-web .
#   docker run -p 3000:3000 condor-web

# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# Copy root workspace manifest first (better layer caching)
COPY package.json package-lock.json ./

# Copy both workspace package.json files so npm can resolve the workspace graph
COPY apps/web/package.json ./apps/web/package.json
COPY apps/studio/package.json ./apps/studio/package.json

# Install all workspace dependencies (hoisted to /app/node_modules)
RUN npm install --prefer-offline

# Copy web app source
COPY apps/web ./apps/web

# Copy monorepo assets referenced by REPO_ROOT (brand, copy, cases, fonts)
COPY brand ./brand
COPY copy ./copy
COPY case-studies ./case-studies
COPY fonts ./fonts

# Build — REPO_ROOT=/app mirrors the local dev environment
WORKDIR /app/apps/web
RUN REPO_ROOT=/app npm run build

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM node:20-alpine
WORKDIR /app

# Copy the built output
COPY --from=builder /app/apps/web/dist ./dist

# Copy root node_modules (workspace deps are hoisted here)
COPY --from=builder /app/node_modules ./node_modules

# Copy web app package.json (needed for module resolution at runtime)
COPY --from=builder /app/apps/web/package.json ./package.json

# Copy monorepo assets read at runtime (copies, case-studies, brand)
COPY --from=builder /app/brand ./brand
COPY --from=builder /app/copy ./copy
COPY --from=builder /app/case-studies ./case-studies

ENV PORT=3000
ENV HOST=0.0.0.0
ENV REPO_ROOT=/app
EXPOSE 3000

# Astro SSR with Node adapter — standalone entry point
CMD ["node", "dist/server/entry.mjs"]
