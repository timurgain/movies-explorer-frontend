import React from "react";
import defaultRunPath from '../images/default_movie_run.jpeg';
import defaultGimmePath from '../images/default_movie_gimme_danger.jpeg';
import defaultBaskiaPath from '../images/default_movie_baskia.jpg';

const MoviesDataContext = React.createContext();

const defaultSavedMoviesData = [
  {
    movieId: '22',
  }
]

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

];

export { MoviesDataContext, defaultMoviesData };
