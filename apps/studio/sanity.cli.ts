import {defineCliConfig} from 'sanity/cli'
import {loadMonoRepoEnv} from './loadMonoRepoEnv'

loadMonoRepoEnv()

if (!process.env.SANITY_STUDIO_PROJECT_ID && process.env.SANITY_PROJECT_ID) {
  process.env.SANITY_STUDIO_PROJECT_ID = process.env.SANITY_PROJECT_ID
}
if (!process.env.SANITY_STUDIO_DATASET && process.env.SANITY_DATASET) {
  process.env.SANITY_STUDIO_DATASET = process.env.SANITY_DATASET
}

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error(
    'Falta SANITY_PROJECT_ID o SANITY_STUDIO_PROJECT_ID. Colócalo en .env (raíz del monorepo), apps/web/.env o apps/studio/.env.',
  )
}

export default defineCliConfig({api: {projectId, dataset}})
