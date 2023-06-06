import './Movies.css';
import React from "react";
import Header from "../Header/Header"
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({onSearch, ...props}) {
  return (
    <>
      <Header displayNav={true} />
      <div className="movies">
        <SearchForm onSearch={onSearch}/>
        <MoviesCardList />
      </div>
      <Footer/>
    </>
  );
}

export default Movies;
