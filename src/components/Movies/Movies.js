import "./Movies.css";
import arrowPath from "../../images/arrow-up.png";
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
  } = useSearch({
    lastSearchKey: "lastSearchMovie",
    pathname: pathname,
    sourceData: moviesData,
    initialMessage: {
      message: "Введите ключевое слово в строке поиска фильмов, например, Бэнкси",
      src: arrowPath,
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

export default Movies;
