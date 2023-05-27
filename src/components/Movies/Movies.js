import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {

  return (
    <>
      <Header/>
      <SearchForm/>
      {/* <Preloader/> */}
      <MoviesCardList/>
    </>
  )
}


export default Movies
