import { API_URL } from "@/config/apiCall";

export async function fetchRandomMoviePoster(): Promise<string> {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.Poster;
}
