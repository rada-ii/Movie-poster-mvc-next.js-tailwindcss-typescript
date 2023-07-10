import { fetchRandomMoviePoster } from "@/config/apiCall";

export async function getRandomMoviePoster(): Promise<string> {
  try {
    const imageUrl = await fetchRandomMoviePoster();
    return imageUrl;
  } catch (error) {
    console.error("Failed to fetch random movie poster:", error);
    throw error;
  }
}
