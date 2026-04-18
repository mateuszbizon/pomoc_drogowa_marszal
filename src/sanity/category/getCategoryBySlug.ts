import { client } from "../lib/client";
import { GET_CATEGORY_BY_SLUG_QUERY } from "../lib/queries";

export async function getCategoryBySlug(categorySlug: string) {
    try {
        const category = await client.withConfig({ useCdn: false }).fetch(GET_CATEGORY_BY_SLUG_QUERY, { slug: categorySlug })

        return {
            category: category || null,
            success: true,
            message: ""
        }
    } catch (error) {
        console.error("Błąd podczas pobierania kategorii", error)

        return {
            category: null,
            success: false,
            message: "Błąd podczas pobierania kategorii"
        }
    }
}