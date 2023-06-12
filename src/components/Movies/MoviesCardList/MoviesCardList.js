import React from "react";
import { useLocation } from "react-router-dom";
import { MoviesDataContext } from "../../../contexts/MoviesDataContext";
import { DeviceContext } from "../../../contexts/DeviceContext";
import "./MoviesCardList.css";
import config from "../../../config";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movieList, ...props }) {
  const pathname = useLocation().pathname;
  const { pagination } = config;

  const device = React.useContext(DeviceContext);
  const {
    favoriteMoviesData,
    handleClickAddToFavoriteMovies,
    handleClickRemoveFromFavoriteMovies,
  } = React.useContext(MoviesDataContext);

  const [isPaginationBtn, setIsPaginationBtn] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [toShow, setToShow] = React.useState(0);

  React.useEffect(() => {
    setToShow(pagination[device].initial + pagination[device].more * page)
    movieList.length > toShow
      ? setIsPaginationBtn(true)
      : setIsPaginationBtn(false);
  }, [device, pagination, movieList, page, toShow]);


  function isFavorite(movie) {
    return favoriteMoviesData.reduce((res, favorite) => {
      if (favorite.movieId === movie.id) {
        movie._id = favorite._id;  // _id is needed in case of delete request
        return true
      }
      return res
    }, false)
  }

  function renderMovies(toShow) {
    return movieList.slice(0, toShow).map((movie) => {
      return (
        <li key={movie.id ? movie.id : movie._id}>
          <MoviesCard
            movie={movie}
            onAdd={handleClickAddToFavoriteMovies}
            onRemove={handleClickRemoveFromFavoriteMovies}
            pathname={pathname}
            isFavorite={isFavorite(movie)}
          />
        </li>
      );
    });
  }

  function handleClickLoadMore() {
    setPage(page + 1);
  }

  return (
    <main className="main">
      <ul className="main__list">{renderMovies(toShow)}</ul>

      {isPaginationBtn && (
        <button className="main__pagination-btn" onClick={handleClickLoadMore}>
          Ещё
        </button>
      )}
    </main>
  );
}

export default MoviesCardList;
