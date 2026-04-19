import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: "Tytuł",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: "Slug",
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: "Obraz",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Tekst alternatywny',
          validation: (rule) => rule.required()
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: "Kategorie",
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: "Data publikacji",
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      title: "Treść",
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})