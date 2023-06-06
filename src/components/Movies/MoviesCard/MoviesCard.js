import React from "react";
import "./MoviesCard.css";
import config from "../../../config";

function MoviesCard({ movie, onClickHandler, pathname, ...props }) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
    onClickHandler();
  }

  return (
    <figure className="card">
      <img
        className="card__image"
        src={config.backend.imageUrl + movie.image.url}
        alt={movie.nameRU}
      />

      {pathname === "/movies" && !isFavorite && (
        <button className="card__save-btn" onClick={handleClickFavorite}>
          Сохранить
        </button>
      )}

      {pathname === "/movies" && isFavorite && (
        <button className="card__mark-btn" onClick={handleClickFavorite} />
      )}

      {pathname === "/saved-movies" && (
        <button className="card__remove-btn" onClick={handleClickFavorite} />
      )}

      <figcaption className="card__caption">
        <h2 className="card__header">{movie.nameRU}</h2>
        <span className="card__duration">{movie.duration}</span>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
