import config from "../config";

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._options = {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }
  }

  getMovies() {
    this._options.method = 'GET'
    return fetch(this._baseUrl, this._options)
      .then(this._responseToJSON)
  }

  _responseToJSON(response) {
    if (response.ok) {
      return response.json()
    }
    return Promise.rejected(`Ошибка ${response.status}`)
  }
}

const moviesApi = new MoviesApi(config.backend.movieUrl);
export default moviesApi
