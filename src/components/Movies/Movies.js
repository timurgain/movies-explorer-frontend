import './Movies.css';
import React from "react";
import Header from "../Header/Header"
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <Header displayNav={true} />
      <div className="movies">
        <SearchForm />
        <MoviesCardList />
      </div>
      <Footer/>
    </>
  );
}

export default Movies;
