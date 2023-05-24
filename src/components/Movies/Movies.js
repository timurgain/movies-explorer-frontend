import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {

  return (
    <>
      <Header/>
      <SearchForm/>
      {/* <Preloader/> */}
      <MoviesCardList/>
      {/* <MoviesCard/> */}
    </>
  )
}


export default Movies
