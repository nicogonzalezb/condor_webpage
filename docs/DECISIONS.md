# Decisiones y tradeoffs (ADR-lite)

## Stack

### Next.js (App Router) + Tailwind
**Por qué:**
- Excelente performance y SEO (static/SSG)
- DX fuerte (RSC, routing, metadata, sitemap/robots nativos)
- Tailwind acelera consistencia con pocos componentes

### Sanity Studio (CMS)
**Por qué:**
- Modelo híbrido: marketing edita contenido; devs mantienen layout/UX
- Flexible para “soluciones” y “casos de éxito”

---

## “condorco” como juego de palabras

Se implementa en `SiteHeader` con `CoWheel`:
- `CoWheel` es **Client Component** (usa hooks)
- Accesible:
  - texto estable en `sr-only`
  - respeta `prefers-reduced-motion`
- Performance:
  - animación simple, poco JS

---

## Captación de leads

### Agenda
Se usa **Google Appointment Schedules** por link.
**Tradeoff:** rápido / cero backend, menos control (atribución avanzada, reglas custom).

### Contact form
- API route `/api/contact`
- Anti-spam MVP: honeypot + rate limit (in-memory)

**Tradeoff:** rate limit no es global en serverless multi-instancia. Si escala, migrar a Redis/Upstash.

---

## Contenido local vs CMS (estado actual)

Para MVP:
- `case-studies.txt` y `copies.txt` permiten iterar sin bloquearse por CMS.

Futuro:
- Migrar a Sanity para edición total.

---

## Pendientes intencionales

- `public/og-image.png` aún no existe (placeholder en metadata).
- Imágenes reales de equipo/casos aún no existen; UI está preparada.


