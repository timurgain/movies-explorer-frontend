import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { MoviesDataContext } from "../../../contexts/MoviesDataContext";
import { DeviceContext } from "../../../contexts/DeviceContext";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../../Preloader/Preloader";

function MoviesCardList({ movies, ...props }) {
  const pathname = useLocation().pathname;

  const device = React.useContext(DeviceContext);
  const {
    moviesData,
    favoriteMoviesData,
    handleClickAddToFavoriteMovies,
    handleClickRemoveFromFavoriteMovies,
  } = React.useContext(MoviesDataContext);

  const [moviesList, setMoviesLIst] = React.useState([]);
  const [isPaginationBtn, setIsPaginationBtn] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [toShow, setToShow] = React.useState(0);
  const [isPreloader, setIsPreloader] = React.useState(false);

  const handleClickFavorites = useCallback(() => {
    if (pathname === "/movies") handleClickAddToFavoriteMovies();
    if (pathname === "/saved-movies") handleClickRemoveFromFavoriteMovies();
  }, [
    pathname,
    handleClickAddToFavoriteMovies,
    handleClickRemoveFromFavoriteMovies,
  ]);

  React.useEffect(() => {
    if (pathname === "/movies") setMoviesLIst(moviesData);
    if (pathname === "/saved-movies") setMoviesLIst(favoriteMoviesData);
  }, [pathname, moviesData, favoriteMoviesData]);

  React.useEffect(() => {
    const toShowConfig = {
      desktop: { initial: 12, more: 3 },
      tablet: { initial: 8, more: 2 },
      mobile: { initial: 5, more: 2 },
    };
    function calcToShow(device) {
      return toShowConfig[device].initial + toShowConfig[device].more * page;
    }

    moviesList.length > toShow
      ? setIsPaginationBtn(true)
      : setIsPaginationBtn(false);

    if (device === "desktop") setToShow(calcToShow("desktop"));
    if (device === "tablet") setToShow(calcToShow("tablet"));
    if (device === "mobile") setToShow(calcToShow("mobile"));
  }, [device, moviesList, page, toShow]);

  function renderMovies(toShow) {
    return moviesList.slice(0, toShow).map((movie) => {
      return (
        <li key={movie.id}>
          <MoviesCard
            movie={movie}
            onClickHandler={handleClickFavorites}
            pathname={pathname}
          />
        </li>
      );
    });
  }

  function handleClickLoadMore() {
    setIsPaginationBtn(false);
    setIsPreloader(true);
    setTimeout(() => {
      setIsPreloader(false);
      setPage(page + 1);
    }, 1000);
  }

  return (
    <main className="main">
      <ul className="main__list">{renderMovies(toShow)}</ul>

      {isPaginationBtn && (
        <button className="main__pagination-btn" onClick={handleClickLoadMore}>
          Ещё
        </button>
      )}
      {isPreloader && <Preloader />}
    </main>
  );
}

export default MoviesCardList;
