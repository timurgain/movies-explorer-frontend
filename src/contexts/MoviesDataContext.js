import React from "react";
import defaultRunPath from '../images/default_movie_run.jpeg';
import defaultGimmePath from '../images/default_movie_gimme_danger.jpeg';
import defaultBaskiaPath from '../images/default_movie_baskia.jpg';

const MoviesDataContext = React.createContext();

const defaultMoviesData = [
  {
    id: '11',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    id: '22',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    id: '33',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    id: '44',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    id: '55',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    id: '66',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    id: '77',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    id: '88',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    id: '99',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    id: '1010',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    id: '2020',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    id: '3030',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    id: '4040',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    id: '5050',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    id: '6060',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    id: '7070',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    id: '8080',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    id: '9090',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },

  {
    id: '100100',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    id: '110110',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

];

const defaultFavoriteMoviesData = [
  {
    id: '110110',
    image: defaultGimmePath,
    nameRU: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м'
  },

  {
    id: '100100',
    image: defaultRunPath,
    nameRU: 'Бег это свобода',
    duration: '1ч 17м'
  },

  {
    id: '9090',
    image: defaultBaskiaPath,
    nameRU: 'Баския: Взрыв реальности',
    duration: '1ч 17м'
  },
]

export { MoviesDataContext, defaultMoviesData, defaultFavoriteMoviesData };
