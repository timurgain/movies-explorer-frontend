import React from "react";
import { MoviesDataContext } from "../../../contexts/MoviesDataContext";
import { DeviceContext } from "../../../contexts/DeviceContext";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, ...props }) {
  const moviesData = React.useContext(MoviesDataContext);
  const device = React.useContext(DeviceContext);

  const [isPaginationBtn, setIsPaginationBtn] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [toShow, setToShow] = React.useState(0);

  React.useEffect(() => {
    const toShowConfig = {
      desktop: { initial: 12, more: 3 },
      tablet: { initial: 8, more: 2 },
      mobile: { initial: 5, more: 2 },
    };

    function isRequiredPaginationBtn() {
      return moviesData.length - toShow > 0 ? true : false;
    }

    function calcToShow(device) {
      return toShowConfig[device].initial + toShowConfig[device].more * page;
    }

    function paginationController() {
      if (isRequiredPaginationBtn(device)) {
        setIsPaginationBtn(true);
        return;
      }
      setIsPaginationBtn(false);
    }

    function toShowController() {
      if (device === "desktop") setToShow(calcToShow("desktop"));
      if (device === "tablet") setToShow(calcToShow("tablet"));
      if (device === "mobile") setToShow(calcToShow("mobile"));
    }

    toShowController();
    paginationController();
  }, [device, moviesData, page, toShow]);

  function renderMovies(toShow) {
    return moviesData.slice(0, toShow).map((movie) => {
      return (
        <li key={movie.movieId}>
          <MoviesCard movie={movie} />
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
