const config = {
  backend: {
    movieUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    mainUrl: 'http://localhost:3000',
    imageUrl: 'https://api.nomoreparties.co',
  },
  regExp: {
    punctuation: /[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~«»\s]/g,
    userNamePattern: "[A-Za-zа-яА-Я \\-]{2,}",
  },
  shortMovie: 40
};

export default config;
