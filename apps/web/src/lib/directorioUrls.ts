/**
 * Slug estable para segmentos de URL (industrias, áreas).
 * Alineado con `slugify` del pipeline Python (NFKD + ascii + guiones).
 */
export function slugifyTaxonomy(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Portada de varios directorios (hub). */
export const DIRECTORIOS_HUB_PATH = '/directorio'

/** Directorio de fichas de casos de uso IA (listado + detalle + hubs taxonómicos). */
export const CASOS_IA_DIRECTORY_BASE = '/directorio-casos-ia'

export function casosIaIndexPath(): string {
  return CASOS_IA_DIRECTORY_BASE
}

export function casosIaFichaPath(slug: string): string {
  return `${CASOS_IA_DIRECTORY_BASE}/${slug}`
}

export function casosIaIndustriaPath(industriaLabel: string): string {
  return `${CASOS_IA_DIRECTORY_BASE}/industria/${slugifyTaxonomy(industriaLabel)}`
}

export function casosIaAreaPath(areaLabel: string): string {
  return `${CASOS_IA_DIRECTORY_BASE}/area/${slugifyTaxonomy(areaLabel)}`
}

export function casosIaTipoPath(tipoIA: string): string {
  return `${CASOS_IA_DIRECTORY_BASE}/tipo-ia/${tipoIA}`
}
