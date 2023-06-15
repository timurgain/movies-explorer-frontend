import config from "../config";

function stripQuery(query, isShortMovie) {
  const strippedQuery = query
    .replace(config.regExp.punctuation, "")
    .toLowerCase();
  const durationLimit = isShortMovie ? config.shortMovie : Infinity;
  return { strippedQuery, durationLimit };
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
 * @returns {Array}
 */

function getResult(query, isShortMovie, sourceData) {
  const { strippedQuery, durationLimit } = stripQuery(query, isShortMovie);
  return getFilteredMovies(sourceData, strippedQuery, durationLimit)
}

export {
  stripQuery,
  getFilteredMovies,
  objToLocalStorage,
  getResult,
};
