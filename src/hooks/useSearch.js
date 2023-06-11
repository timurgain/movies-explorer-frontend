import React from "react";
import arrowPath from "../images/arrow-up.png";
import emptySearch from "../images/empty-search.png";
import { objToLocalStorage, getResult } from "../utils/search";

/**
 * Manages searching movies, keeps the last query params and result in the LocalStorage
 *
 * @param {string} lastSearchKey
 * @param {string} pathname
 * @param {[]} sourceData
 * @returns
 */

function useSearch(lastSearchKey, pathname, sourceData) {
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
    if (lastSearchKey in localStorage) {
      setLastSearch(JSON.parse(localStorage.getItem(lastSearchKey)));
    }
  }, [lastSearchKey]);

  React.useEffect(() => {
    setMovies(lastSearch.result);
    setMessage(lastSearch.message);
  }, [lastSearch]);

  React.useEffect(() => {
    movies.length < 1 ? setShowMessage(true) : setShowMessage(false);
  }, [movies]);

  const handleSearch = React.useCallback(
    (query, isShortMovie) => {
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
      objToLocalStorage(lastSearchKey, last);

      setTimeout(() => setShowPreloader(false), 300);
    },
    [lastSearchKey, pathname, sourceData]
  );

  return {
    showPreloader,
    showMessage,
    message,
    movies,
    lastSearch,
    handleSearch,
  };
}

export default useSearch;
