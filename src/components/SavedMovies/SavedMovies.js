import "./SavedMovies.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { stripQuery, getQueryKey, getFilteredMovies } from "../../utils/search";
import { MoviesDataContext } from "../../contexts/MoviesDataContext";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({ onSearch, ...props }) {
  const { pathname } = useLocation();
  const { favoriteMoviesData } = React.useContext(MoviesDataContext);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    setMovies(favoriteMoviesData)
  }, [favoriteMoviesData])

  function handleSearch(query, isShortMovie, sourceData = favoriteMoviesData) {
    const { strippedQuery, durationLimit } = stripQuery(query, isShortMovie);
    const key = getQueryKey(pathname, query, durationLimit);

    if (key in localStorage) {
      setMovies(JSON.parse(localStorage.getItem(key)));
    } else {
      const filteredMovies = getFilteredMovies(
        sourceData,
        strippedQuery,
        durationLimit
      );
      setMovies(filteredMovies);
      localStorage.setItem(key, JSON.stringify(filteredMovies));
    }
  }

  return (
    <>
      <Header displayNav={true} />
      <div className="movies">
        <SearchForm onSearch={handleSearch} />
        <MoviesCardList movieList={movies} />
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
