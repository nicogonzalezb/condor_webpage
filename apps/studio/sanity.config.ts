import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

const projectId =
  import.meta.env.SANITY_STUDIO_PROJECT_ID || import.meta.env.SANITY_PROJECT_ID
const dataset =
  import.meta.env.SANITY_STUDIO_DATASET ||
  import.meta.env.SANITY_DATASET ||
  'production'

if (!projectId) {
  throw new Error(
    'Falta el project ID de Sanity. En apps/web/.env define SANITY_PROJECT_ID (o SANITY_STUDIO_PROJECT_ID) y SANITY_DATASET.',
  )
}

export default defineConfig({
  name: 'condor_studio',
  title: 'Condór Studio',
  projectId,
  dataset,
  vite: {
    envDir: '../web',
    envPrefix: ['VITE_', 'SANITY_', 'SANITY_STUDIO_'],
  },
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
