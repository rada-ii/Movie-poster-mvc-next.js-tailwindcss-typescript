"use client";

import React from "react";
import MoviePoster from "@/views/MoviePoster";

const MoviePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl text-orange-700 text-center m-auto p-6">
        Movie App
      </h1>
      <MoviePoster />
    </div>
  );
};

export default MoviePage;
