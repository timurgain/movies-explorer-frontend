import config from "../config";

/**
 * User backend API
 *
 * If CORS and JWT is sent via httpOnly cookie, use this settings for the server side:
 * httpOnly: true, sameSite: 'none', secure: true
 */

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._options = {
      credentials: "include",  // send cookie including httpOnly cookies with jwt
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
  }

  getUserMe() {
    this._options.method = "GET";
    if ('body' in this._options) delete this._options.body
    return fetch(`${this._baseUrl}/users/me`, this._options).then(
      this._responseToJSON
    );
  }

  postUser(email, password, name) {
    this._options.method = "POST";
    this._options.body = JSON.stringify({ email, password, name });
    return fetch(`${this._baseUrl}/signup`, this._options).then(
      this._responseToJSON
    );
  }

  login(email, password) {
    this._options.method = "POST";
    this._options.body = JSON.stringify({ email, password });
    return fetch(`${this._baseUrl}/signin`, this._options).then(
      this._responseToResolve
    );
  }

  _responseToJSON(response) {
    console.log(response)
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(text);
      });
    }
    return response.json();
  }

  _responseToResolve(response) {
    console.log(response)
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(text);
      });
    }
    return Promise.resolve();
  }
}

const mainApi = new MainApi(config.backend.mainUrl);
export default mainApi;
