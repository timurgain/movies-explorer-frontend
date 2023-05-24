import React from "react";
import { MoviesDataContext } from "../../../contexts/MoviesDataContext";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, ...props }) {

  const moviesData = React.useContext(MoviesDataContext)

  function renderMovies() {
    return moviesData.map((movie) => {
      return (
        <li key={movie.movieId}>
          <MoviesCard movie={movie} />
        </li>
      );
    });
  }

  return (
    <main className="main">
      <ul className="main__list">{renderMovies()}</ul>
    </main>
  );
}

export default MoviesCardList;
