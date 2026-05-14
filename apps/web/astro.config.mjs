// @ts-check
import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { SOLUTION_PILLARS } from './src/lib/solutions.ts'
import { getLocalCaseStudies } from './src/lib/caseStudies.ts'
import { createClient } from '@sanity/client'

const solutionPages = SOLUTION_PILLARS.map((p) => `https://condorco.co/soluciones/${p.slug}/`)
const casePages = getLocalCaseStudies().map((c) => `https://condorco.co/casos/${c.slug}/`)

async function getDirectorioPages() {
  const projectId = process.env.SANITY_PROJECT_ID
  if (!projectId) return []
  try {
    const client = createClient({ projectId, dataset: process.env.SANITY_DATASET ?? 'production', apiVersion: '2024-01-01', useCdn: true })
    const slugs = await client.fetch(`*[_type == "useCaseFicha" && estadoPublicacion == "publicado"].slug.current`)
    return slugs.map((s) => `https://condorco.co/directorio-casos-ia/${s}/`)
  } catch {
    return []
  }
}

const directorioPages = await getDirectorioPages()

export default defineConfig({
  site: 'https://condorco.co',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    sitemap({
      customPages: [...solutionPages, ...casePages, ...directorioPages],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
