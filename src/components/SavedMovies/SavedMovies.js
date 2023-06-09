import "./SavedMovies.css";
import iconPath from '../../images/info-icon.png';
import React from "react";
import { useLocation } from "react-router-dom";
import { MoviesDataContext } from "../../contexts/MoviesDataContext";
import useSearch from "../../hooks/useSearch";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import Message from "../Movies/Message/Message";

function SavedMovies({ onSearch, ...props }) {
  const { pathname } = useLocation();
  const { favoriteMoviesData } = React.useContext(MoviesDataContext);

  const {
    showPreloader,
    showMessage,
    message,
    movies,
    lastSearch,
    handleSearch,
  } = useSearch({
    lastSearchKey: false,
    pathname: pathname,
    sourceData: favoriteMoviesData,
    initialDisplayData: favoriteMoviesData,
    initialMessage: {
      message: "У вас пока нет избранных фильмов",
      src: iconPath,
    },
  });

  return (
    <>
      <Header displayNav={true} />
      <main className="movies">
        <SearchForm onSearch={handleSearch} lastSearch={lastSearch} />

        {showPreloader && <Preloader />}
        {showMessage && !showPreloader && (
          <Message message={message.message} src={message.src} />
        )}

        {!showMessage && !showPreloader && (
          <MoviesCardList movieList={movies} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
