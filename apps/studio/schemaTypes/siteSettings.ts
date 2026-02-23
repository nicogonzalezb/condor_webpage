import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Default Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'calendarUrl',
      title: 'Google Calendar (Book a meeting) URL',
      type: 'url',
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Primary CTA label',
      type: 'string',
      initialValue: 'Agenda una reunión',
    }),
  ],
})


