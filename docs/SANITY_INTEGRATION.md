# Integración Sanity ↔ Astro

Guía futura para conectar el Sanity Studio (`apps/studio/`) con el frontend Astro (`apps/web/`).

---

## Estado actual (MVP)

El frontend lee datos de archivos locales:

| Fuente | Ruta | Leída por |
|---|---|---|
| Casos de éxito | `case-studies/case-studies.txt` | `src/lib/caseStudies.ts` |
| Copias / textos | `copy/copies.txt` | `src/lib/copies.ts` |
| Agenda URL | `brand/link_google.txt` | `src/lib/site.ts` |
| Soluciones | hardcoded en `src/lib/solutions.ts` | — |

Los schemas de Sanity ya están definidos en `apps/studio/schemaTypes/`.

---

## Pasos para migrar a Sanity

### 1. Instalar cliente Sanity en apps/web

```bash
npm install @sanity/client --workspace=@condor/web
```

### 2. Crear cliente

```ts
// src/lib/sanity.ts
import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
```

### 3. Variables de entorno necesarias

```env
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

### 4. Reemplazar getLocalCaseStudies()

```ts
// src/lib/caseStudies.ts (con Sanity)
import { sanity } from './sanity'

export async function getCaseStudies() {
  return sanity.fetch(`
    *[_type == "caseStudy"] | order(_createdAt desc) {
      "slug": slug.current,
      title,
      "summary": problem,
      tags
    }
  `)
}
```

### 5. Páginas con SSR on-demand

En modo `output: 'server'` (ya configurado), las páginas Astro ya son SSR.
Para `[slug].astro` simplemente usa `await` en el fetch de Sanity:

```astro
---
// casos/[slug].astro
import { sanity } from '@/lib/sanity'
const { slug } = Astro.params
const c = await sanity.fetch(
  `*[_type == "caseStudy" && slug.current == $slug][0]`,
  { slug }
)
if (!c) return Astro.redirect('/404')
---
```

### 6. Revalidación / cache

- Para contenido que cambia raramente, `useCdn: true` es suficiente.
- Para revalidación on-demand, considera un webhook de Sanity → endpoint Astro que invalide el cache.

---

## Schemas disponibles

Ver `apps/studio/schemaTypes/`:
- `siteSettings` — título, descripción, calendarUrl, CTA labels
- `solutionCategory` — pilares de soluciones (title, slug, summary, order)
- `caseStudy` — casos (title, slug, client, problem, approach, results, tags)
- `teamMember` — equipo (name, role, bio, linkedin)

---

## Orden recomendado de migración

1. **Casos de éxito** → migrar `case-studies.txt` a documentos `caseStudy` en Sanity
2. **Equipo** → migrar `TEAM` hardcoded a documentos `teamMember`
3. **Soluciones** → migrar `SOLUTION_PILLARS` a documentos `solutionCategory`
4. **Site copies** → migrar `copies.txt` a documento singleton `siteSettings`
5. **Calendar URL** → migrar `brand/link_google.txt` al campo `calendarUrl` de `siteSettings`
