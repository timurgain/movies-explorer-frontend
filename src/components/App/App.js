import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
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
import PopupContext from "../../contexts/PopupContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from '../PageNotFound/PageNotFound'

function App() {

  const [moviesData, setMoviesData] = React.useState(defaultMoviesData);
  const [favoriteMoviesData, setFavoriteMoviesData] = React.useState(
    defaultFavoriteMoviesData
  );
  const [currentUser, setCurrentUser] = React.useState(defaultCurrentUser);
  const [device, setDevice] = React.useState("tablet");
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  React.useEffect(() => {
    function handleKeydownEsc(evt) {
      if (evt.key === "Escape") setIsPopupOpen(false);
    }
    function handleClickClosePopup(evt) {
      const isClosing = ["popup", "popup__close-btn"].some((cls) =>
        Array.from(evt.target.classList).includes(cls)
      );
      if (isClosing) setIsPopupOpen(false);
    }

    if (isPopupOpen) {
      document.addEventListener('keydown', handleKeydownEsc)
      document.addEventListener('click', handleClickClosePopup)
    }
    return () => {
      document.removeEventListener('keydown', handleKeydownEsc)
      document.removeEventListener('click', handleClickClosePopup)
    }
  }, [isPopupOpen])

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

  function handleClickAddToFavoriteMovies() {
    // makes api request
    console.log("API, add");
  }

  function handleClickRemoveFromFavoriteMovies() {
    // makes api request
    console.log("API, remove");
  }

  function handleSubmitRegister() {
    // makes api request
    console.log("API, register");
  }

  function handleSubmitLogin() {
    // makes api request
    console.log("API, login");
  }

  function handleSubmitProfile() {
    // makes api request
    console.log("API, profile");
  }

  return (
    <DeviceContext.Provider value={device}>
      <PopupContext.Provider value={{isPopupOpen, setIsPopupOpen}}>
        <CurrentUserContext.Provider value={currentUser}>
          <MoviesDataContext.Provider
            value={{
              moviesData,
              favoriteMoviesData,
              handleClickAddToFavoriteMovies,
              handleClickRemoveFromFavoriteMovies,
            }}
          >

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
              <Route path="/profile" element={<Profile onSubmit={handleSubmitProfile} />} />
              <Route path="/signup" element={<Register onSubmit={handleSubmitRegister} />} />
              <Route path="/signin" element={<Login onSubmit={handleSubmitLogin}/>} />
              <Route path="*" element={<PageNotFound />}/>
            </Routes>

          </MoviesDataContext.Provider>
        </CurrentUserContext.Provider>
      </PopupContext.Provider>
    </DeviceContext.Provider>
  );
}

export default App;
