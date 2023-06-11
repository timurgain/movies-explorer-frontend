import "./Movies.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { MoviesDataContext } from "../../contexts/MoviesDataContext";
import useSearch from "../../hooks/useSearch";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import Message from "./Message/Message";

function Movies({ onSearch, ...props }) {
  const { pathname } = useLocation();
  const { moviesData } = React.useContext(MoviesDataContext);

  const {
    showPreloader,
    showMessage,
    message,
    movies,
    lastSearch,
    handleSearch,
  } = useSearch("lastSearchMovie", pathname, moviesData);

  return (
    <>
      <Header displayNav={true} />
      <div className="movies">
        <SearchForm onSearch={handleSearch} lastSearch={lastSearch} />

        {showPreloader && <Preloader />}
        {showMessage && !showPreloader && (
          <Message message={message.message} src={message.src} />
        )}

        {!showMessage && !showPreloader && (
          <MoviesCardList movieList={movies} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Movies;
