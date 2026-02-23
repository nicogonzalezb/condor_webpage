import fs from 'node:fs'
import path from 'node:path'

export type CaseStudyTeaser = {
  slug: string
  title: string
  summary: string
  tags: string[]
}

function repoRoot() {
  // REPO_ROOT is injected by npm scripts at the monorepo root.
  // Fallback: resolve two levels up from cwd (apps/web → monorepo root).
  return process.env.REPO_ROOT || path.resolve(process.cwd(), '..', '..')
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function getLocalCaseStudies(): CaseStudyTeaser[] {
  try {
    const p = path.join(repoRoot(), 'case-studies', 'case-studies.txt')
    const raw = fs.readFileSync(p, 'utf8')
    const blocks = raw
      .split(/\n\s*\n+/g)
      .map((x) => x.trim())
      .filter(Boolean)

    const guesses: Array<{title: string; tag: string}> = [
      {title: 'Sr. Insignia', tag: 'chatbot'},
      {title: 'micasino', tag: 'software'},
      {title: 'uff-nails', tag: 'chatbot'},
      {title: 'vía alambre', tag: 'vision'},
    ]

    const out: CaseStudyTeaser[] = []
    for (const g of guesses) {
      const match = blocks.find((b) => b.toLowerCase().includes(g.title.toLowerCase()))
      if (!match) continue
      out.push({
        slug: slugify(g.title),
        title: g.title,
        summary: match.replace(/\s+/g, ' ').slice(0, 220),
        tags: [g.tag],
      })
    }

    if (!out.length) {
      return blocks.map((b, i) => ({
        slug: `caso-${i + 1}`,
        title: `Caso ${i + 1}`,
        summary: b.replace(/\s+/g, ' ').slice(0, 220),
        tags: [],
      }))
    }

    return out
  } catch {
    return []
  }
}
