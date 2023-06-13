import React from "react";
import emptySearch from "../images/empty-search.png";
import { objToLocalStorage, getResult } from "../utils/search";

/**
 * Manages searching movies, keeps the last query params and result in the LocalStorage.
 * - Set lastSearchKey to false if dont need to use localStorage for keeping a search result.
 * - Set initialDisplayData to false if need to show empty result on mounting.
 *
 * @param {Object} options
 * @param {string | boolean} options.lastSearchKey
 * @param {string} options.pathname
 * @param {Array} options.sourceData
 * @param {string | boolean} options.initialDisplayData
 * @param {Object} options.initialMessage
 * @param {string} options.initialMessage.query
 * @param {boolean} options.initialMessage.isShortMovie
 * @param {Array} options.initialMessage.result
 * @param {Object} options.initialMessage.message
 * @param {string} options.initialMessage.message.message
 * @param {string} options.initialMessage.message.src
 *
 * @returns
 */

function useSearch({lastSearchKey, pathname, sourceData, initialDisplayData, initialMessage}) {
  const [movies, setMovies] = React.useState([]);
  const [showPreloader, setShowPreloader] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);
  const [message, setMessage] = React.useState(initialMessage);
  const [lastSearch, setLastSearch] = React.useState({
    query: "",
    isShortMovie: false,
    result: [],
    message: {
      message: message.message,
      src: message.src,
    },
  });

  // What to show on mounting, runs if initialDisplayData is not false
  React.useEffect(() => {
    if (initialDisplayData) setMovies(initialDisplayData)
  }, [initialDisplayData])

  // Get last search result from the localStorage if lastSearchKey is setted up
  React.useEffect(() => {
    if (lastSearchKey in localStorage) {
      setLastSearch(JSON.parse(localStorage.getItem(lastSearchKey)));
    }
  }, [lastSearchKey]);

  // Use last search result from the localStorage if lastSearchKey is setted up
  React.useEffect(() => {
    if (lastSearchKey) {
      setMovies(lastSearch.result);
      setMessage(lastSearch.message);
    }
  }, [lastSearch, lastSearchKey]);

  // Show info if there is empty movie list
  React.useEffect(() => {
    movies.length < 1 ? setShowMessage(true) : setShowMessage(false);
  }, [movies]);


  /**
   * @param {string} query
   * @param {boolean} isShortMovie
   */
  const handleSearch = React.useCallback(
    (query, isShortMovie) => {
      setShowPreloader(true);
      setMessage({ message: "Ничего не найдено", src: emptySearch });

      const result = getResult(query, isShortMovie, sourceData, pathname);
      setMovies(result);
      setTimeout(() => setShowPreloader(false), 300);

      // keep the search result in localStorage if lastSearchKey is setted up
      if (lastSearchKey) {
        const last = {
          query: query,
          isShortMovie: isShortMovie,
          result: result,
          message: { message: "Ничего не найдено", src: emptySearch },
        };
        setLastSearch(last);
        objToLocalStorage(lastSearchKey, last);
      }
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
