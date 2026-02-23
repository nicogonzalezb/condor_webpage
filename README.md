# Condór — Website (monorepo)

Sitio web de marketing para **Condór** (IA + soluciones de datos) con CMS headless (Sanity).

---

## Estructura

```
.
├── apps/
│   ├── web/          # Next.js (App Router) — sitio público
│   └── studio/       # Sanity Studio — CMS para marketing
├── brand/            # Assets de marca (logos, colores, link de agenda)
├── copy/             # copies.txt (editable para textos futuros)
├── case-studies/     # case-studies.txt (datos de casos de éxito)
└── package.json      # workspace root
```

---

## Desarrollo local

Desde la raíz del repo:

```bash
npm install          # instala dependencias en todos los workspaces
npm run dev          # inicia apps/web (Next.js) en http://localhost:3000
npm run dev:studio   # inicia apps/studio (Sanity) en http://localhost:3333
```

---

## Docs (arquitectura / operación)

- `docs/ARCHITECTURE.md` — arquitectura end-to-end
- `docs/CONTENT_MODEL.md` — modelo de contenido (Sanity) + fuentes temporales
- `docs/DEPLOYMENT.md` — deploy/operación (Vercel + Sanity)
- `docs/DECISIONS.md` — decisiones y tradeoffs (ADR-lite)

---

## Variables de entorno

### apps/web (`.env.local`)

```bash
# ---- Sitio ----
# (opcional) URL del sitio; usado en sitemap/canonical si lo necesitas custom
# NEXT_PUBLIC_SITE_URL=https://condorco.co

# ---- SMTP (contacto) ----
# Solo si quieres que el formulario envíe emails
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=
CONTACT_FROM=hola@condor.ai
CONTACT_TO=hola@condor.ai

# ---- Google Calendar ----
# (ya está en brand/link_google.txt, pero puedes override)
# NEXT_PUBLIC_CALENDAR_URL=https://calendar.app.google/...

# ---- Sanity (si activas preview) ----
# SANITY_PROJECT_ID=
# SANITY_DATASET=production
# SANITY_API_TOKEN=sk-...
```

### apps/studio (`.env` o variables en Vercel/Sanity Deploy)

```bash
SANITY_STUDIO_PROJECT_ID=tu_project_id
SANITY_STUDIO_DATASET=production
```

---

## Deploy

### Website (apps/web) → Vercel

1. Conecta tu repo a Vercel.
2. Configura:
   - **Root Directory**: `apps/web`
   - **Framework Preset**: Next.js
   - **Environment Variables**: las de arriba (sin corchetes).
3. Vercel detecta el monorepo; solo builds `apps/web`.

### Sanity Studio (apps/studio)

Opción A: **Sanity Manage**

```bash
cd apps/studio
npx sanity deploy   # sigue instrucciones; se hospeda en *.sanity.studio
```

Opción B: **Vercel**

Mismo flujo que el website pero con **Root Directory** `apps/studio`.

---

## Páginas incluidas

| Ruta                      | Descripción                              |
| ------------------------- | ---------------------------------------- |
| `/`                       | Home: hero, soluciones, stats, casos     |
| `/soluciones`             | Listado de 4 pilares                     |
| `/soluciones/[slug]`      | Detalle de cada pilar                    |
| `/casos`                  | Listado de casos de éxito                |
| `/casos/[slug]`           | Detalle de cada caso                     |
| `/equipo`                 | Miembros del equipo                      |
| `/contacto`               | Formulario + CTA "Agendar"               |
| `/legal/privacidad`       | Política de privacidad (borrador)        |
| `/legal/cookies`          | Política de cookies (borrador)           |
| `/sitemap.xml`            | Sitemap generado automáticamente         |
| `/robots.txt`             | robots.txt                               |

---

## Sanity: esquemas de contenido

- `solutionCategory` — 4 pilares de soluciones
- `solution` — sub-servicios (opcional)
- `caseStudy` — casos de éxito
- `teamMember` — equipo
- `siteSettings` — navegación global, CTAs, tracking
- `post` — preparado para blog (inactivo en MVP)

---

## Assets pendientes

- **OG Image** (`public/og-image.png`): 1200×630 px, placeholder por ahora.
- **Fotos de equipo**: se muestran cajas vacías; remplazar cuando las tengas.
- **Imágenes de casos**: cuando conectes Sanity.

---

## Stack

- **Next.js 16** (App Router, RSC, streaming)
- **Tailwind CSS 4** (via @tailwindcss/postcss)
- **Sanity v3** (content lake + Studio)
- **Nodemailer** (envío de emails desde API route)
- **TypeScript** estricto

---

## Principios de diseño

- **Clarity > persuasion** — copy claro, sin hype.
- **Menos componentes, reusados** — sistema de diseño compacto.
- **Tono calmado y técnico** — sin urgencia falsa.
- **Performance/SEO** — estático por defecto, ISR si se conecta Sanity.

---

¿Preguntas? Abre un issue o contacta al equipo.
