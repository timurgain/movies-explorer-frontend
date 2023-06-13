import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import config from "../../config";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import {
  CurrentUserContext,
  defaultCurrentUser,
} from "../../contexts/CurrentUserContext";
import { MoviesDataContext } from "../../contexts/MoviesDataContext";
import { DeviceContext, enumWindowWidth } from "../../contexts/DeviceContext";
import PopupContex from "../../contexts/PopupContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Tooltip from "../Tooltip/Tooltip";
import Video from "../Video/Video";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [moviesData, setMoviesData] = React.useState([]);
  const [favoriteMoviesData, setFavoriteMoviesData] = React.useState([]);

  const [loggedIn, setLoggedIn] = React.useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );
  const [currentUser, setCurrentUser] = React.useState(defaultCurrentUser);
  const [device, setDevice] = React.useState("tablet");
  const [isPopupNavOpen, setIsPopupNavOpen] = React.useState(false);
  const [isPopupTooltipOpen, setIsPopupTooltipOpen] = React.useState(false);
  const [tooltip, setTooltip] = React.useState({ message: "", btnText: "" });
  const [isPopupVideoOpen, setIsPopupVideoOpen] = React.useState(false);
  const [video, setVideo] = React.useState({ link: "", title: "" });

  const isAnyPopupOpen =
    isPopupNavOpen || isPopupTooltipOpen || isPopupVideoOpen;

  // Automatic authorization if user has valid jwt in httpOnly cookies

  React.useEffect(() => {
    if (!loggedIn) {
      mainApi
        .getUserMe()
        .then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
          localStorage.setItem("loggedIn", true);
          navigate("/movies", { replace: true });
        })
        .catch(console.log);
    }
  }, [navigate, loggedIn]);

  // Redirect if authorized

  React.useEffect(() => {
    if (loggedIn && ["/signup", "/signin"].includes(pathname)) {
      navigate("/movies", { replace: true });
    }
  }, [loggedIn, navigate, pathname]);

  // Load data if authorized

  React.useEffect(() => {
    if (loggedIn) {
      // favorites movies from Main api
      mainApi
        .getFavoriteMovies()
        .then(setFavoriteMoviesData)
        .catch(console.log);
      // all movies from BeatFilm api
      moviesApi.getMovies().then(setMoviesData).catch(console.log);
      // user
      mainApi
        .getUserMe()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch(console.log);
    }
  }, [loggedIn]);

  // Manage popup

  React.useEffect(() => {
    function closeAllPopups() {
      setIsPopupNavOpen(false);
      setIsPopupTooltipOpen(false);
      setIsPopupVideoOpen(false);
      setVideo({ link: "", title: "" });
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

  function showTooltip(message, btnText) {
    setTooltip({
      message: message,
      btnText: btnText,
    });
    setIsPopupTooltipOpen(true);
  }

  function showVideo(videoLink, title) {
    setVideo({ link: videoLink, title: title });
    setIsPopupVideoOpen(true);
  }

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

  // Use main API, register, auth

  function handleSubmitRegister({ email, password, name }, enableForm) {
    mainApi
      .postUser(email, password, name)
      .then((user) => {
        showTooltip("Регистрация прошла успешно!", "Здорово");
        handleSubmitLogin({ email, password })
      })
      .catch((err) => showTooltip(JSON.parse(err.message).message, "Понятно"))
      .finally(enableForm);
  }

  function handleSubmitLogin({ email, password }, enableForm) {
    mainApi
      .login(email, password)
      .then(() => {
        setLoggedIn(true);
        localStorage.setItem("loggedIn", true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => showTooltip(JSON.parse(err.message).message, "Понятно"))
      .finally(enableForm);
  }

  function handleSubmitProfile({ name, email }, enableForm) {
    mainApi
      .patchUserMe(name, email)
      .then((user) => {
        setCurrentUser(user);
        showTooltip("Данные обновили успешно!", "Здорово");
      })
      .catch((err) => showTooltip(JSON.parse(err.message).message, "Понятно"))
      .finally(enableForm);
  }

  function handleLogout() {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
        navigate("/", { replace: true });
      })
      .catch((err) => showTooltip(JSON.parse(err.message).message, "Понятно"));
  }

  // Use main API, favorite movies

  function handleClickAddToFavoriteMovies(movie) {
    const data = {
      ...movie,
      movieId: movie.id,
      image: config.backend.imageUrl + movie.image.url,
      thumbnail: config.backend.imageUrl + movie.image.formats.thumbnail.url,
    };
    delete data.id;
    delete data.created_at;
    delete data.updated_at;

    mainApi
      .postMovie(data)
      .then((movie) => {
        setFavoriteMoviesData([...favoriteMoviesData, movie]);
      })
      .catch((err) => showTooltip(JSON.parse(err.message).message, "Понятно"));
  }

  function handleClickRemoveFromFavoriteMovies(movie) {
    const { _id } = movie;
    mainApi
      .deleteMovie(_id)
      .then(() =>
        setFavoriteMoviesData(
          favoriteMoviesData.filter((movie) => movie._id !== _id)
        )
      )
      .catch((err) => showTooltip(JSON.parse(err.message).message, "Понятно"));
  }

  return (
    <>
      <DeviceContext.Provider value={device}>
        <CurrentUserContext.Provider value={{ loggedIn, currentUser }}>
          <PopupContex.Provider
            value={{
              Nav: { isPopupNavOpen, setIsPopupNavOpen },
              showTooltip,
              showVideo,
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

                {/* unprotected routes*/}
                <Route
                  path="/"
                  element={<Main />} />
                <Route
                  path="/signup"
                  element={<Register onSubmit={handleSubmitRegister} />}
                />
                <Route
                  path="/signin"
                  element={<Login onSubmit={handleSubmitLogin} />}
                />

                {/* protected routes */}
                <Route element={<ProtectedRoute />}>
                  <Route
                    path="/movies"
                    element={<Movies />} />
                  <Route
                    path="/saved-movies"
                    element={<SavedMovies />} />
                  <Route
                    path="/profile"
                    element={
                      <Profile
                        onSubmit={handleSubmitProfile}
                        onLogout={handleLogout} /> } />
                </Route>

                {/* page not found routes */}
                <Route path="*" element={<PageNotFound />} />

              </Routes>
            </MoviesDataContext.Provider>
          </PopupContex.Provider>
        </CurrentUserContext.Provider>
      </DeviceContext.Provider>

      <Tooltip
        isOpen={isPopupTooltipOpen}
        message={tooltip.message}
        btnText={tooltip.btnText}
        onClick={() => setIsPopupTooltipOpen(false)}
      />

      <Video
        isOpen={isPopupVideoOpen}
        videoLink={video.link}
        title={video.title}
      />
    </>
  );
}

export default App;
