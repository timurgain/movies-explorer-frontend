import config from '../config';

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._options = {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }
  }


}


const mainApi = new MainApi(config.backend.mainUrl)
export default mainApi
