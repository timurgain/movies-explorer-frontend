import "./Movies.css";
import React from "react";
import arrowPath from "../../images/arrow-up.png";
import emptySearch from "../../images/empty-search.png";
import { useLocation } from "react-router-dom";
import { objToLocalStorage, getResult } from "../../utils/search";
import { MoviesDataContext } from "../../contexts/MoviesDataContext";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import Message from "./Message/Message";

const LAST_SEARCH_KEY = "lastSearchMovie";

function Movies({ onSearch, ...props }) {
  const { pathname } = useLocation();
  const { moviesData } = React.useContext(MoviesDataContext);

  const [movies, setMovies] = React.useState([]);
  const [showPreloader, setShowPreloader] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);
  const [message, setMessage] = React.useState({
    message: "Введите ключевое слово в строке поиска фильмов, например, Бэнкси",
    src: arrowPath,
  });
  const [lastSearch, setLastSearch] = React.useState({
    query: "",
    isShortMovie: false,
    result: [],
    message: {
      message: message.message,
      src: message.src,
    },
  });

  React.useEffect(() => {
    if (LAST_SEARCH_KEY in localStorage) {
      setLastSearch(JSON.parse(localStorage.getItem(LAST_SEARCH_KEY)));
    }
  }, []);

  React.useEffect(() => {
    setMovies(lastSearch.result);
    setMessage(lastSearch.message);
  }, [lastSearch]);

  React.useEffect(() => {
    movies.length < 1 ? setShowMessage(true) : setShowMessage(false);
  }, [movies]);

  function handleSearch(query, isShortMovie, sourceData = moviesData) {
    setShowPreloader(true);
    setMessage({ message: "Ничего не найдено", src: emptySearch });

    const result = getResult(query, isShortMovie, sourceData, pathname);
    setMovies(result);

    const last = {
      query: query,
      isShortMovie: isShortMovie,
      result: result,
      message: { message: "Ничего не найдено", src: emptySearch },
    };
    setLastSearch(last);
    objToLocalStorage(LAST_SEARCH_KEY, last);

    setTimeout(() => setShowPreloader(false), 300);
  }

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
