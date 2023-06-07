import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import config from "../../config";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import {
  CurrentUserContext,
  defaultCurrentUser,
} from "../../contexts/CurrentUserContext";
import {
  MoviesDataContext,
  defaultMoviesData,
  defaultFavoriteMoviesData,
} from "../../contexts/MoviesDataContext";
import { DeviceContext, enumWindowWidth } from "../../contexts/DeviceContext";
import PopupNavContext from "../../contexts/PopupNavContext";
import PopupTooltipContex from "../../contexts/PopupTooltipContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Tooltip from "../Tooltip/Tooltip";

function App() {
  const navigate = useNavigate();

  const [moviesData, setMoviesData] = React.useState(defaultMoviesData);
  const [favoriteMoviesData, setFavoriteMoviesData] = React.useState(
    defaultFavoriteMoviesData
  );
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(defaultCurrentUser);
  const [device, setDevice] = React.useState("tablet");
  const [isPopupNavOpen, setIsPopupNavOpen] = React.useState(false);
  const [isPopupTooltipOpen, setIsPopupTooltipOpen] = React.useState(false);
  const [tooltip, setTooltip] = React.useState({ message: "", btnText: "" });

  const isAnyPopupOpen = isPopupNavOpen || isPopupTooltipOpen;

  // Set up the current user and check the jwt

  React.useEffect(() => {
    mainApi
      .getUserMe()
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch(console.log);
  }, [loggedIn]);

  // Manage popup

  React.useEffect(() => {
    function closeAllPopups() {
      setIsPopupNavOpen(false);
      setIsPopupTooltipOpen(false);
    }

    function handleKeydownEsc(evt) {
      if (evt.key === "Escape") closeAllPopups();
    }
    function handleClickClosePopup(evt) {
      const isClosing = ["popup", "popup__close-btn"].some((cls) =>
        Array.from(evt.target.classList).includes(cls)
      );
      if (isClosing) closeAllPopups();
    }

    if (isAnyPopupOpen) {
      document.addEventListener("keydown", handleKeydownEsc);
      document.addEventListener("click", handleClickClosePopup);
    }
    return () => {
      document.removeEventListener("keydown", handleKeydownEsc);
      document.removeEventListener("click", handleClickClosePopup);
    };
  }, [isAnyPopupOpen]);

  // Manage resize and device type

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= enumWindowWidth.desktop) {
        setDevice("desktop");
      } else if (window.innerWidth >= enumWindowWidth.tablet) {
        setDevice("tablet");
      } else {
        setDevice("mobile");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Movie beatfilm API

  function handleSearchMovies(query, isShortMovie) {
    const durationLimit = isShortMovie ? config.shortMovie : Infinity;
    const strippedQuery = query
      .replace(config.regExp.punctuation, "")
      .toLowerCase();
    const key = query + durationLimit.toString();

    if (key in localStorage) {
      setMoviesData(JSON.parse(localStorage.getItem(key)));
      return;
    }

    moviesApi
      .getMovies()
      .then((movies) => {
        const filteredMovies = movies.reduce((result, movie) => {
          const strippedName = movie.nameRU
            .replace(config.regExp.punctuation, "")
            .toLowerCase();
          if (
            strippedName.includes(strippedQuery) &&
            movie.duration < durationLimit
          ) {
            result.push(movie);
          }
          return result;
        }, []);

        setMoviesData(filteredMovies);
        localStorage.setItem(key, JSON.stringify(filteredMovies));
      })
      .catch(reportError);
  }

  // Auth API

  function handleSubmitRegister({ email, password, name }) {
    mainApi
      .postUser(email, password, name)
      .then((user) => {
        console.log(user)
        navigate("/signin", { replace: true });
        setTooltip({
          message: `Регистрация прошла успешно!`,
          btnText: "Здорово",
        })
      })
      .catch((err) => {
        setTooltip({
          message: JSON.parse(err.message).message,
          btnText: "Понятно",
        });
      })
      .finally(() => setIsPopupTooltipOpen(true));
  }

  function handleSubmitLogin({ email, password }) {
    mainApi
      .login(email, password)
      .then(() => {
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err)
        setTooltip({
          message: JSON.parse(err.message).message,
          btnText: "Понятно",
        });
        setIsPopupTooltipOpen(true);
      });
  }

  function handleSubmitProfile() {
    // makes api request
    console.log("API, profile");
  }

  // Movie favorites API

  function handleClickAddToFavoriteMovies() {
    // makes api request
    console.log("API, add");
  }

  function handleClickRemoveFromFavoriteMovies() {
    // makes api request
    console.log("API, remove");
  }

  return (
    <>
      <DeviceContext.Provider value={device}>
        <CurrentUserContext.Provider value={currentUser}>
          <PopupNavContext.Provider
            value={{ isPopupNavOpen, setIsPopupNavOpen }}
          >
            <PopupTooltipContex.Provider
              value={{
                isPopupTooltipOpen,
                setIsPopupTooltipOpen,
                tooltip,
                setTooltip,
              }}
            >
              <MoviesDataContext.Provider
                value={{
                  moviesData,
                  favoriteMoviesData,
                  handleClickAddToFavoriteMovies,
                  handleClickRemoveFromFavoriteMovies,
                }}
              >
                <Routes>
                  <Route
                    path="/"
                    element={<Main />} />
                  <Route
                    path="/movies"
                    element={<Movies onSearch={handleSearchMovies} />}
                  />
                  <Route
                    path="/saved-movies"
                    element={<SavedMovies />} />
                  <Route
                    path="/profile"
                    element={<Profile onSubmit={handleSubmitProfile} />}
                  />
                  <Route
                    path="/signup"
                    element={<Register onSubmit={handleSubmitRegister} />}
                  />
                  <Route
                    path="/signin"
                    element={<Login onSubmit={handleSubmitLogin} />}
                  />
                  <Route
                    path="*"
                    element={<PageNotFound />} />
                </Routes>
              </MoviesDataContext.Provider>
            </PopupTooltipContex.Provider>
          </PopupNavContext.Provider>
        </CurrentUserContext.Provider>
      </DeviceContext.Provider>

      <Tooltip
        isOpen={isPopupTooltipOpen}
        message={tooltip.message}
        btnText={tooltip.btnText}
        onClick={() => setIsPopupTooltipOpen(false)}
      />
    </>
  );
}

export default App;
