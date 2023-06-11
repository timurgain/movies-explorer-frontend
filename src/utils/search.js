import config from "../config";

function stripQuery(query, isShortMovie) {
  const strippedQuery = query
    .replace(config.regExp.punctuation, "")
    .toLowerCase();
  const durationLimit = isShortMovie ? config.shortMovie : Infinity;
  return { strippedQuery, durationLimit };
}

function getQueryKey(pathname, query, durationLimit) {
  return `${pathname},${query},${durationLimit.toString()}`;
}

function getFilteredMovies(sourceData, query, duration) {
  return sourceData.reduce((result, movie) => {
    const strippedName = movie.nameRU
      .replace(config.regExp.punctuation, "")
      .toLowerCase();
    if (strippedName.includes(query) && movie.duration < duration) {
      result.push(movie);
    }
    return result;
  }, []);
}

function objToLocalStorage(key, object) {
  try {
    localStorage.setItem(key, JSON.stringify(object));
  } catch (error) {
    console.log("Что-то не так с localStorage, возможно переполнен");
  }
}

/**
 * Performs the search and saves this particular {request:result} in localStorage
 * @param {string} query
 * @param {boolean} isShortMovie
 * @param {Array} sourceData
 * @param {string} pathname
 * @returns {Array}
 */

function getResult(query, isShortMovie, sourceData, pathname) {
  const { strippedQuery, durationLimit } = stripQuery(query, isShortMovie);
  const key = getQueryKey(pathname, query, durationLimit);
  let result;
  if (key in localStorage) {
    result = JSON.parse(localStorage.getItem(key));
  } else {
    result = getFilteredMovies(sourceData, strippedQuery, durationLimit);
    objToLocalStorage(key, result);
  }
  return result;
}

export {
  stripQuery,
  getQueryKey,
  getFilteredMovies,
  objToLocalStorage,
  getResult,
};
