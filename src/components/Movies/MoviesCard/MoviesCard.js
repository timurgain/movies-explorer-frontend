import React from "react";
import "./MoviesCard.css";
import config from "../../../config";
import PopupContex from "../../../contexts/PopupContext";


function MoviesCard({ movie, onAdd, onRemove, pathname, isFavorite, ...props }) {
  const { showVideo } = React.useContext(PopupContex);

  function getImageSrc() {
    if (movie.image.url) return config.backend.imageUrl + movie.image.url
    return movie.image
  }

  function handleClickAdd() {
    onAdd(movie);
  }

  function handleClickRemove() {
    onRemove(movie);
  }

  function handleClickCard() {
    showVideo(movie.trailerLink, movie.nameRU)
  }

  return (
    <figure className="card">
      <img
        className="card__image"
        src={getImageSrc()}
        alt={movie.nameRU}
        onClick={handleClickCard}
      />

      {pathname === "/movies" && !isFavorite && (
        <button className="card__save-btn" onClick={handleClickAdd}>
          Сохранить
        </button>
      )}

      {pathname === "/movies" && isFavorite && (
        <button className="card__mark-btn" onClick={handleClickRemove} />
      )}

      {pathname === "/saved-movies" && (
        <button className="card__remove-btn" onClick={handleClickRemove} />
      )}

      <figcaption className="card__caption">
        <h2 className="card__header">{movie.nameRU}</h2>
        <span className="card__duration">{movie.duration}</span>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
