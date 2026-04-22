import { client } from "../lib/client"
import { GET_RECENT_IMAGES_QUERY } from "../lib/queries"

export async function getRecentImages() {
    try {
        const images = await client.withConfig({
            useCdn: false
        }).fetch(GET_RECENT_IMAGES_QUERY)

        return {
            images: images || [],
            success: true,
            message: ""
        }
    } catch (error) {
        console.error("Błąd podczas pobierania ostatnich zdjęć", error)
        
        return {
            images: [],
            success: false,
            message: "Błąd podczas pobierania ostatnich zdjęć"
        }
    }
}