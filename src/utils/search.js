import config from "../config";

function stripQuery(query, isShortMovie) {
  const strippedQuery = query
    .replace(config.regExp.punctuation, "")
    .toLowerCase();
  const durationLimit = isShortMovie ? config.shortMovie : Infinity;
  return { strippedQuery, durationLimit }
}

function getQueryKey(pathname, query, durationLimit) {
  return `${pathname},${query},${durationLimit.toString()}`
}

function getFilteredMovies(sourceData, query, duration) {
  return sourceData.reduce((result, movie) => {
    const strippedName = movie.nameRU
      .replace(config.regExp.punctuation, "")
      .toLowerCase();
    if (
      strippedName.includes(query) &&
      movie.duration < duration
    ) {
      result.push(movie);
    }
    return result;
  }, []);
}

export { stripQuery, getQueryKey, getFilteredMovies }
