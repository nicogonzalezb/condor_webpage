// @ts-check
import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { SOLUTION_PILLARS } from './src/lib/solutions.ts'
import { getLocalCaseStudies } from './src/lib/caseStudies.ts'

const solutionPages = SOLUTION_PILLARS.map((p) => `https://condorco.co/soluciones/${p.slug}/`)
const casePages = getLocalCaseStudies().map((c) => `https://condorco.co/casos/${c.slug}/`)

export default defineConfig({
  site: 'https://condorco.co',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    sitemap({
      customPages: [...solutionPages, ...casePages],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
