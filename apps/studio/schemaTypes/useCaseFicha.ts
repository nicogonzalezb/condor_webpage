import {defineField, defineType} from 'sanity'

export const useCaseFicha = defineType({
  name: 'useCaseFicha',
  title: 'Caso de uso IA (directorio)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industria',
      title: 'Industria',
      type: 'string',
      options: {
        list: [
          'Servicios profesionales',
          'Retail / E-commerce',
          'Salud',
          'Manufactura / Logística',
          'Servicios financieros',
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'areaFuncional',
      title: 'Área funcional',
      type: 'string',
      options: {
        list: [
          'Ventas',
          'Marketing',
          'Operaciones',
          'Servicio al cliente',
          'Finanzas',
          'Legal',
          'Talento',
          'Tecnología',
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'estadoPublicacion',
      title: 'Estado de publicación',
      description: 'Solo los casos en estado «Publicado» se listan en el sitio web.',
      type: 'string',
      options: {
        list: [
          {title: 'Borrador', value: 'borrador'},
          {title: 'Publicado', value: 'publicado'},
        ],
        layout: 'radio',
      },
      initialValue: 'publicado',
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      description:
        'Resumen corto para tarjetas y fallback de meta; apunta a ~180–300 caracteres con intención clara.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro visible (contenido)',
      description:
        'Párrafo de apertura en la página del caso (mejor 300–600 caracteres). Complementa la descripción con contexto útil para el lector.',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'secciones',
      title: 'Secciones del artículo',
      description:
        'Cuerpo principal por bloques (título + texto). En web se renderizan como H2 + párrafos para SEO.',
      type: 'array',
      validation: (Rule) => Rule.max(12),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'titulo',
              title: 'Título de la sección',
              type: 'string',
              validation: (Rule) => Rule.required().min(2),
            }),
            defineField({
              name: 'cuerpo',
              title: 'Cuerpo',
              type: 'text',
              rows: 8,
              validation: (Rule) => Rule.required().min(20),
            }),
          ],
          preview: {
            select: {title: 'titulo'},
          },
        },
      ],
    }),
    defineField({
      name: 'targetQuery',
      title: 'Consulta objetivo (SEO)',
      description: 'Keyword o frase principal que el caso pretende cubrir (para trazabilidad editorial y research).',
      type: 'string',
    }),
    defineField({
      name: 'searchIntent',
      title: 'Intención de búsqueda',
      type: 'string',
      options: {
        list: [
          {title: 'Informacional', value: 'informacional'},
          {title: 'Comercial / comparación', value: 'comercial'},
          {title: 'Transaccional', value: 'transaccional'},
          {title: 'Navegacional', value: 'navegacional'},
        ],
        layout: 'radio',
      },
      initialValue: 'informacional',
    }),
    defineField({
      name: 'seoTitle',
      title: 'Título SEO (<title>)',
      description: 'Opcional. Si vacío, se usa el título principal. Ideal ~45–65 caracteres.',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      description: 'Opcional. Snippet sugerido; suele funcionar bien ~130–170 caracteres útiles.',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'URL canónica absoluta',
      description:
        'Opcional. Si vacío, el sitio usa la URL canónica por defecto del caso (/directorio-casos-ia/[slug]).',
      type: 'url',
    }),
    defineField({
      name: 'faq',
      title: 'Preguntas frecuentes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'pregunta', title: 'Pregunta', type: 'string'}),
            defineField({name: 'respuesta', title: 'Respuesta', type: 'text', rows: 3}),
          ],
          preview: {
            select: {title: 'pregunta'},
          },
        },
      ],
    }),
    defineField({
      name: 'casosRelacionadosSlugs',
      title: 'Casos relacionados (slugs)',
      description:
        'Slugs de otros casos en el mismo directorio (sin /directorio-casos-ia/). Generan enlaces internos en la página.',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'inputs',
      title: 'Inputs (datos requeridos)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'outputs',
      title: 'Outputs (resultados)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'riesgos',
      title: 'Riesgos',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'kpis',
      title: 'KPIs',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'complejidad',
      title: 'Complejidad de implementación',
      type: 'string',
      options: {
        list: ['baja', 'media', 'alta'],
      },
    }),
    defineField({
      name: 'regulacion',
      title: 'Regulación aplicable',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'tipoIA',
      title: 'Tipo de IA (principal)',
      type: 'string',
      options: {
        list: [
          {title: 'Predictivo', value: 'predictivo'},
          {title: 'Generativo', value: 'generativo'},
          {title: 'Recomendación', value: 'recomendacion'},
          {title: 'Clasificación', value: 'clasificacion'},
          {title: 'Visión por computador', value: 'vision'},
          {title: 'Procesamiento de lenguaje (NLP)', value: 'nlp'},
          {title: 'Agentes / orquestación', value: 'agentes'},
          {title: 'Optimización', value: 'optimizacion'},
        ],
      },
    }),
    defineField({
      name: 'faseAdopcion',
      title: 'Fase de adopción típica',
      description: 'En qué etapa suele encajar la organización que implementa este patrón.',
      type: 'string',
      options: {
        list: [
          {title: 'Exploración', value: 'exploracion'},
          {title: 'Piloto', value: 'piloto'},
          {title: 'Escala', value: 'escala'},
          {title: 'Optimización', value: 'optimizacion'},
        ],
      },
    }),
    defineField({
      name: 'nivelEvidencia',
      title: 'Nivel de evidencia',
      description: 'Qué tan sólida es la base empírica o documental que respalda el caso.',
      type: 'string',
      options: {
        list: [
          {
            title: 'Observacional — marcos, guías o literatura general',
            value: 'observacional',
          },
          {
            title: 'Piloto o benchmark sectorial',
            value: 'piloto_benchmark',
          },
          {
            title: 'Producción documentada (varios despliegues o fuentes primarias)',
            value: 'produccion_documentada',
          },
        ],
      },
    }),
    defineField({
      name: 'fechaRevision',
      title: 'Última revisión editorial',
      type: 'date',
    }),
    defineField({
      name: 'revisadoPor',
      title: 'Revisado por',
      description: 'Nombre o rol del revisor (no sustituye trazabilidad en el CMS).',
      type: 'string',
    }),
    defineField({
      name: 'fuentes',
      title: 'Fuentes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'titulo', title: 'Título', type: 'string'}),
            defineField({name: 'url', title: 'URL', type: 'url'}),
            defineField({
              name: 'tier',
              title: 'Tier',
              type: 'string',
              options: {list: ['A', 'B']},
            }),
          ],
          preview: {
            select: {title: 'titulo', subtitle: 'tier'},
          },
        },
      ],
      validation: (Rule) => Rule.min(2).error('Mínimo 2 fuentes para mantener credibilidad editorial.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'industria',
      estado: 'estadoPublicacion',
    },
    prepare({title, subtitle, estado}) {
      const tag = estado === 'borrador' ? ' · Borrador' : ''
      return {
        title,
        subtitle: subtitle ? `${subtitle}${tag}` : undefined,
      }
    },
  },
})
