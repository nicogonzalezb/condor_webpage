import {defineField, defineType} from 'sanity'

// Optional: we don't ship a blog in MVP, but we keep the model ready for later.
export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3}),
    defineField({name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'publishedAt', title: 'Published at', type: 'datetime'}),
  ],
})


