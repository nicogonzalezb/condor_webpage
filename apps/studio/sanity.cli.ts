import {defineCliConfig} from 'sanity/cli'

process.loadEnvFile?.()

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error('Missing SANITY_PROJECT_ID. Set it in apps/studio/.env.')
}

export default defineCliConfig({api: {projectId, dataset}})
