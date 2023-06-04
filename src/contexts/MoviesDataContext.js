import React from "react";
import defaultRunPath from '../images/default_movie_run.jpeg';
import defaultGimmePath from '../images/default_movie_gimme_danger.jpeg';
import defaultBaskiaPath from '../images/default_movie_baskia.jpg';

const MoviesDataContext = React.createContext();

const defaultMoviesData = [
  {
    movieId: '11',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    movieId: '22',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    movieId: '33',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    movieId: '44',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    movieId: '55',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    movieId: '66',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    movieId: '77',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    movieId: '88',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    movieId: '99',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    movieId: '1010',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    movieId: '2020',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    movieId: '3030',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    movieId: '4040',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    movieId: '5050',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    movieId: '6060',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    movieId: '7070',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    movieId: '8080',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    movieId: '9090',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    movieId: '100100',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    movieId: '110110',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

];

const defaultFavoriteMoviesData = [
  {
    movieId: '110110',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    movieId: '100100',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    movieId: '9090',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },
]

export { MoviesDataContext, defaultMoviesData, defaultFavoriteMoviesData };
