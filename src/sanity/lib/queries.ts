import { defineQuery } from "next-sanity";

export const GET_ALL_BLOGS_QUERY = defineQuery(`
    *[_type == "post"] | order(publishedAt desc) {
        _id, publishedAt, title, slug, categories[]->, mainImage
    }
`)

export const GET_BLOG_BY_SLUG_QUERY = defineQuery(`
    *[_type == "post" && slug.current == $slug][0] {
        _id, publishedAt, title, slug, categories[]->, mainImage, body
    }  
`)