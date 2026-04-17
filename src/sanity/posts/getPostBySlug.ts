import { client } from "../lib/client";
import { GET_BLOG_BY_SLUG_QUERY } from "../lib/queries";

export async function getPostBySlug(postSlug: string) {
    try {
        const post = await client.withConfig({ useCdn: false }).fetch(GET_BLOG_BY_SLUG_QUERY, { slug: postSlug })

        return {
            post: post || null,
            success: true,
            message: ""
        }
    } catch (error) {
        console.error("Błąd podczas pobierania bloga", error)

        return {
            post: null,
            success: false,
            message: "Błąd podczas pobierania bloga"
        }
    }
}