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
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  const [moviesData, setMoviesData] = React.useState(defaultMoviesData);
  const [favoriteMoviesData, setFavoriteMoviesData] = React.useState(
    defaultFavoriteMoviesData
  );
  const [currentUser, setCurrentUser] = React.useState(defaultCurrentUser);
  const [device, setDevice] = React.useState("tablet");

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

  return (
    <DeviceContext.Provider value={device}>
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
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login/>} />
          </Routes>

        </MoviesDataContext.Provider>
      </CurrentUserContext.Provider>
    </DeviceContext.Provider>
  );
}

export default App;
