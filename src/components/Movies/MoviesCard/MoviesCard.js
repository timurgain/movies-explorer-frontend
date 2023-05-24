import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, ...props }) {
  const [isSaved, setIfSaved] = React.useState(false);
  function handleBtnClick() {
    setIfSaved(!isSaved);
  }

  return (
    <figure className="card">
      <img className="card__image" src={movie.image} alt={movie.nameRU} />

      {!isSaved && (
        <button className="card__save-btn" onClick={handleBtnClick}>
          Сохранить
        </button>
      )}

      {isSaved && (
        <button className="card__mark-btn" onClick={handleBtnClick} />
      )}

      <figcaption className="card__caption">
        <h2 className="card__header">{movie.nameRU}</h2>
        <span className="card__duration">{movie.duration}</span>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
