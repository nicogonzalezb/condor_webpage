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
        list: ['Ventas', 'Marketing', 'Operaciones', 'Servicio al cliente'],
      },
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'industria',
    },
  },
})
