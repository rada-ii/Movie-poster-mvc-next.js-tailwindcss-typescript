export const API_KEY = "e0ef81b7";
export const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export async function fetchRandomMoviePoster(): Promise<string> {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.Poster;
}
