import React from "react";
import "./App.css";
import {
  MoviesDataContext,
  defaultMoviesData,
} from "../../contexts/MoviesDataContext";
import Movies from "../Movies/Movies";

function App() {
  const [moviesData, setMoviesData] = React.useState(defaultMoviesData);

  return (
    <MoviesDataContext.Provider value={moviesData}>
      <Movies />
    </MoviesDataContext.Provider>
  );
}

export default App;
