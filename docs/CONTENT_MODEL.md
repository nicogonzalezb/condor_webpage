# Modelo de contenido (Sanity) + fuentes temporales

## Objetivo del modelo

Permitir que marketing edite:
- Soluciones (pilares + detalle)
- Casos de éxito
- Equipo
- Settings globales (CTAs, tracking)

Manteniendo:
- performance (render estático/ISR)
- SEO (metadata por página)

---

## Schemas actuales (apps/studio/schemaTypes)

### `siteSettings`
Uso:
- Metadata global (title/description)
- CTA principal (label y URL de agenda)

Campos:
- `title` (string, required)
- `description` (text)
- `calendarUrl` (url)
- `primaryCtaLabel` (string)

### `solutionCategory`
Uso:
- representar los **pilares** (Chat/Agents, Data/ML, Gobernanza, Software a medida)

Campos:
- `title` (string)
- `slug` (slug)
- `summary` (text)
- `order` (number)

### `solution`
Uso:
- sub-soluciones dentro de un pilar (si el negocio lo necesita)

Campos:
- `title` (string)
- `slug` (slug)
- `category` (reference -> solutionCategory)
- `overview` (portable text)
- `deliverables` (string[])
- `faqs` (array de {q,a})

### `caseStudy`
Uso:
- caso de éxito con estructura

Campos:
- `title`, `slug`
- `client`, `industry`
- `problem` (text)
- `approach` (portable text)
- `results` (string[])
- `tags` (string[])

### `teamMember`
Uso:
- miembros del equipo (editable)

Campos:
- `name` (string)
- `role` (string)
- `bio` (text)
- `linkedin` (url)

### `post` (opcional)
Uso:
- blog futuro (no MVP)

Campos:
- `title`, `slug`, `excerpt`, `content`, `publishedAt`

---

## Fuentes temporales (antes de conectar Sanity al frontend)

Hoy el sitio usa:
- `case-studies/case-studies.txt` → parse ligero en `apps/web/src/lib/caseStudies.ts`
- `copy/copies.txt` → defaults + override (JSON o `key: value`) en `apps/web/src/lib/copies.ts`
- `brand/link_google.txt` → CTA agenda en `apps/web/src/lib/site.ts`

---

## Plan recomendado para “conectar Sanity” al frontend (cuando toque)

1. Crear `apps/web/src/lib/sanity/client.ts` con `@sanity/client`.
2. Definir queries GROQ:
   - `siteSettings`
   - `solutionCategory` + `solution`
   - `caseStudy`
   - `teamMember`
3. Migración:
   - pasar los casos del `case-studies.txt` a `caseStudy` (manual o script)
4. Render:
   - usar `generateStaticParams` + `fetch` en server components
   - o ISR (`revalidate`) si quieren updates sin deploy


