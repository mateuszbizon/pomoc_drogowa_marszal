import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const imageType = defineType({
    name: "imageGallery",
    title: "Zdjęcie",
    type: "document",
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'mainImage',
            type: 'image',
            title: "Zdjęcie",
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
    ],
    preview: {
        select: {
            title: 'mainImage.alt',
            media: 'mainImage'
        },
        prepare(selection) {
            return { ...selection }
        }
    }
})