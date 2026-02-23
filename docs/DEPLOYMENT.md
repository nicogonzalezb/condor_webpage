# Deploy / Operación

## Objetivo

Desplegar:
- `apps/web` (Astro 5, SSR) en Vercel o self-hosting con Node
- `apps/studio` (Sanity Studio) en Sanity (o Vercel)

---

## apps/web → Vercel / Node standalone

### Config (Vercel)
- **Root Directory**: `apps/web`
- **Framework**: Other (Astro)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Config (self-hosting)
```bash
REPO_ROOT=$(pwd) npm run build:web
node apps/web/dist/server/entry.mjs
```

### Variables de entorno

**SMTP (para envío de emails del formulario):**
- `SMTP_HOST`
- `SMTP_PORT` (587 recomendado)
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_FROM`
- `CONTACT_TO`

**Agenda (override del archivo `brand/link_google.txt`):**
- `PUBLIC_CALENDAR_URL` ← era `NEXT_PUBLIC_CALENDAR_URL` en Next.js

**Monorepo (automáticamente inyectado por npm scripts):**
- `REPO_ROOT` ← ruta absoluta al root del monorepo, para leer archivos .txt

### Verificación post-deploy
- `GET /sitemap-index.xml` responde bien
- `GET /robots.txt` responde bien
- `GET /` → hero navy + grid de cards blancas, CoWheel anima
- `GET /soluciones/chat-agents` → 200
- `GET /casos/sr-insignia` → 200
- Formulario en `/contacto`:
  - si SMTP configurado → llega email
  - si no configurado → muestra mensaje "recibido" (esperado para MVP)
- `POST /api/contact` con honeypot → `{ok: true}` (silent reject)

---

## apps/studio → Sanity deploy

### Requisitos
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

### Deploy

```bash
cd apps/studio
npx sanity deploy
```

---

## Dominio y SEO

El dominio está configurado en `apps/web/astro.config.mjs`:
```js
site: 'https://condorco.co'
```

Si cambia de dominio:
- actualizar `site` en `astro.config.mjs`
- actualizar `docs/ARCHITECTURE.md` y `README.md` si aplica

---

## Observabilidad (mínimo recomendado)

- Eventos a medir (cuando agreguen analítica):
  - click CTA "Agendar"
  - submit formulario contacto
  - navegación a pilares de soluciones
