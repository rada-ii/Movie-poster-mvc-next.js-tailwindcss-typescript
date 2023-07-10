import React, { useState } from "react";

const MoviePoster: React.FC = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  async function fetchRandomMoviePoster() {
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=e0ef81b7&s=movie&type=movie"
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.Search.length);
      const imdbId = data.Search[randomIndex].imdbID;
      const posterResponse = await fetch(
        `https://www.omdbapi.com/?apikey=e0ef81b7&i=${imdbId}`
      );
      const posterData = await posterResponse.json();
      setImageUrl(posterData.Poster);
      setError("");
    } catch (error) {
      setError("Failed to fetch random movie poster.");
    }
  }

  return (
    <div className="img">
      <button className="btn" onClick={fetchRandomMoviePoster}>
        Fetch Poster
      </button>
      {imageUrl ? (
        <div className="w-64 h-64 object-cover cursor-pointer m-4">
          <img
            src={imageUrl}
            alt="Random movie"
            className="w-full h-full rounded-lg"
          />
        </div>
      ) : (
        <p className="text-red-500 mb-4">{error}</p>
      )}
    </div>
  );
};

export default MoviePoster;
