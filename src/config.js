const config = {
  backend: {
    movieUrl: "https://api.nomoreparties.co/beatfilm-movies",
    imageUrl: "https://api.nomoreparties.co",
    mainUrl: "https://movie-tm.nomoredomains.monster/api",
  },
  regExp: {
    punctuation: /[!"#$%&'()*+,\-./:;<=>?@\\[\\\]^_`{|}~«»\s]/g,
    userNamePattern: "[A-Za-zа-яА-Я \\-]{2,}",
    emailPattern: "^[\\w.-]+@[a-zA-Z\\d_-]+?(?:\\.[a-zA-Z]{2,4})+$",
  },
  shortMovie: 40,
  pagination: {
    desktop: { initial: 12, more: 3 },
    tablet: { initial: 8, more: 2 },
    mobile: { initial: 5, more: 2 },
  },
};

export default config;
