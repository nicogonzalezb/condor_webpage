import fs from 'node:fs'
import path from 'node:path'

export type SiteCopies = {
  heroTitle: string
  heroSubtitle: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  solutionsTitle: string
  casesTitle: string
  contactTitle: string
}

const DEFAULT_COPIES: SiteCopies = {
  heroTitle: 'IA aplicada, clara y en producción.',
  heroSubtitle:
    'Construimos soluciones de IA para empresas: chat y agentes, datos y machine learning, gobernanza y consultoría, y software a la medida.',
  primaryCtaLabel: 'Agenda una reunión',
  secondaryCtaLabel: 'Ver soluciones',
  solutionsTitle: 'Soluciones',
  casesTitle: 'Casos de éxito',
  contactTitle: 'Contacto',
}

function repoRoot() {
  return process.env.REPO_ROOT || path.resolve(process.cwd(), '..', '..')
}

function parseKeyValue(raw: string): Partial<SiteCopies> {
  const out: Record<string, string> = {}
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed) continue
    if (trimmed.startsWith('#')) continue
    const m = trimmed.match(/^([A-Za-z0-9_]+)\s*[:=]\s*(.+)$/)
    if (!m) continue
    const [, k, v] = m
    out[k] = v
  }
  return {
    heroTitle: out.heroTitle,
    heroSubtitle: out.heroSubtitle,
    primaryCtaLabel: out.primaryCtaLabel,
    secondaryCtaLabel: out.secondaryCtaLabel,
    solutionsTitle: out.solutionsTitle,
    casesTitle: out.casesTitle,
    contactTitle: out.contactTitle,
  }
}

export function getCopies(): SiteCopies {
  try {
    const p = path.join(repoRoot(), 'copy', 'copies.txt')
    const raw = fs.readFileSync(p, 'utf8').trim()
    if (!raw) return DEFAULT_COPIES

    if (raw.startsWith('{')) {
      const json = JSON.parse(raw) as Partial<SiteCopies>
      return {...DEFAULT_COPIES, ...json}
    }

    return {...DEFAULT_COPIES, ...parseKeyValue(raw)}
  } catch {
    return DEFAULT_COPIES
  }
}
