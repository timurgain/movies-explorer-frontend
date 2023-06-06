const config = {
  backend: {
    movieUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    mainUrl: 'http://localhost:3000',
    imageUrl: 'https://api.nomoreparties.co',
  },
  regEx: {
    punctuation: /[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~«»\s]/g
  },
  shortMovie: 40
};

export default config;
