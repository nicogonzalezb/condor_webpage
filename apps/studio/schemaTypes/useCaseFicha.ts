import {defineField, defineType} from 'sanity'

export const useCaseFicha = defineType({
  name: 'useCaseFicha',
  title: 'Ficha de Caso de Uso IA',
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
      description: 'Solo las fichas en estado «Publicado» se listan en el sitio web.',
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
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
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
      description: 'Qué tan sólida es la base empírica o documental que respalda la ficha.',
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
