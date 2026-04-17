import { defineQuery } from "next-sanity";

export const GET_ALL_BLOGS_QUERY = defineQuery(`
    *[_type == "post"] | order(publishedAt desc) {
        _id, publishedAt, title, slug, categories[]->, mainImage
    }
`)