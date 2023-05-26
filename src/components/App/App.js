import React from "react";
import "./App.css";
import {
  MoviesDataContext,
  defaultMoviesData,
} from "../../contexts/MoviesDataContext";
import { DeviceContext, enumWindowWidth } from "../../contexts/DeviceContext";
import Movies from "../Movies/Movies";

function App() {
  const [moviesData, setMoviesData] = React.useState(defaultMoviesData);
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


  return (
    <DeviceContext.Provider value={device}>
      <MoviesDataContext.Provider value={moviesData}>

        <Movies />

      </MoviesDataContext.Provider>
    </DeviceContext.Provider>
  );
}

export default App;
