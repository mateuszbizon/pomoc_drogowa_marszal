import { client } from "../lib/client";
import { GET_ALL_IMAGES_QUERY } from "../lib/queries";

export async function getAllImages() {
    try {
        const images = await client.withConfig({
            useCdn: false
        }).fetch(GET_ALL_IMAGES_QUERY)

        return {
            images: images || [],
            success: true,
            message: ""
        }
    } catch (error) {
        console.error("Błąd podczas pobierania wszystkich zdjęć", error)
        
        return {
            images: [],
            success: false,
            message: "Błąd podczas pobierania wszystkich zdjęć"
        }
    }
}