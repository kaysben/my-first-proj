import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function Home() {
  const movies = useSelector((state) => state.MovieReducer.movies);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {movies.map((el) => (
        <MovieCard el={el}></MovieCard>
      ))}
    </div>
  );
}

export default Home;
