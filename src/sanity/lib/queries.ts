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

export const GET_BLOGS_BY_CATEGORY_SLUG_QUERY = defineQuery(`
    *[_type == "post" && count(categories[@->slug.current == $categorySlug]) > 0] | order(publishedAt desc) {
        _id, publishedAt, title, slug, categories[]->, mainImage
    }
`)

export const GET_CATEGORY_BY_SLUG_QUERY = defineQuery(`
    *[_type == "category" && slug.current == $slug][0]  
`)

export const GET_ALL_IMAGES_QUERY = defineQuery(`
    *[_type == "imageGallery"] | order(_createdAt desc) {
        _id, mainImage
    }
`)

export const GET_RECENT_IMAGES_QUERY = defineQuery(`
    *[_type == "imageGallery"] | order(_createdAt desc)[0...6] {
        _id, mainImage
    }
`)