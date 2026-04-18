import { client } from "../lib/client";
import { GET_BLOGS_BY_CATEGORY_SLUG_QUERY } from "../lib/queries";

export async function getPostsByCategorySlug(categorySlug: string) {
    try {
        const posts = await client.withConfig({ useCdn: false }).fetch(GET_BLOGS_BY_CATEGORY_SLUG_QUERY, { categorySlug })

        return {
            posts: posts || [],
            success: true,
            message: ""
        }
    } catch (error) {
        console.error("Błąd podczas pobierania postów", error)

        return {
            posts: [],
            success: false,
            message: "Błąd podczas pobierania postów"
        }
    }
}