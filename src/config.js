const config = {
  backend: {
    movieUrl: "https://api.nomoreparties.co/beatfilm-movies",
    imageUrl: "https://api.nomoreparties.co",
    mainUrl: "https://movie-tm.nomoredomains.monster/api"
  },
  regExp: {
    punctuation: /[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~«»\s]/g,
    userNamePattern: "[A-Za-zа-яА-Я \\-]{2,}",
  },
  shortMovie: 40,
};

export default config;
