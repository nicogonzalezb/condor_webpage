export type SolutionPillar = {
  slug: 'chat-agents' | 'data-ml' | 'gobernanza-consultoria' | 'software-a-medida'
  title: string
  summary: string
  highlights: string[]
}

export const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    slug: 'chat-agents',
    title: 'Chat & Agents',
    summary: 'Agentes conversacionales para ventas, soporte y operaciones, integrados con tus sistemas.',
    highlights: ['WhatsApp, web chat y canales internos', 'Ruteo inteligente y handoff humano', 'Integración con CRM/ERP'],
  },
  {
    slug: 'data-ml',
    title: 'Data & Machine Learning',
    summary: 'Modelos y plataformas de datos para predicción, segmentación, clasificación y analítica.',
    highlights: ['Pipelines y feature store', 'MLOps y monitoreo', 'Dashboards y analítica accionable'],
  },
  {
    slug: 'gobernanza-consultoria',
    title: 'Gobernanza & Consultoría',
    summary: 'Calidad, seguridad y operación de datos/IA con prácticas auditables y escalables.',
    highlights: ['Catálogo, linaje y políticas', 'Calidad de datos', 'Guías de operación y adopción'],
  },
  {
    slug: 'software-a-medida',
    title: 'Software a medida con IA',
    summary: 'Construimos software end-to-end con IA integrada: producto, backend, integraciones y UX.',
    highlights: ['Discovery y prototipo', 'Construcción incremental', 'Entrega y soporte'],
  },
]
