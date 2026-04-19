import { client } from "../lib/client";
import { GET_ALL_BLOGS_QUERY } from "../lib/queries";

export async function getAllPosts() {
    try {
        const posts = await client.withConfig({
            useCdn: false
        }).fetch(GET_ALL_BLOGS_QUERY)

        return {
            posts: posts || [],
            success: true,
            message: ""
        }
    } catch (error) {
        console.error("Błąd podczas pobierania wszystkich postów", error)
        
        return {
            posts: [],
            success: false,
            message: "Błąd podczas pobierania wszystkich postów"
        }
    }
}