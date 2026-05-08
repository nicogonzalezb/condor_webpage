import { createClient, type SanityClient } from '@sanity/client'

function envString(key: 'SANITY_PROJECT_ID' | 'SANITY_DATASET'): string | undefined {
  const fromProcess =
    typeof process !== 'undefined' && typeof process.env?.[key] === 'string'
      ? process.env[key]!.trim()
      : ''
  if (fromProcess) return fromProcess
  const fromMeta = import.meta.env[key]
  return typeof fromMeta === 'string' && fromMeta.trim() ? fromMeta.trim() : undefined
}

const projectId = envString('SANITY_PROJECT_ID')
const dataset = envString('SANITY_DATASET') ?? 'production'

/** False si falta SANITY_PROJECT_ID (p. ej. deploy sin .env): evita 500 en rutas que usan Sanity. */
export const sanityConfigured = Boolean(projectId && projectId.length > 0)

export const sanity: SanityClient | null = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null
