import React from "react";
import "./SearchForm.css";
import searchIconPath from "../../../images/icon_search.svg";
import PopupTooltipContex from "../../../contexts/PopupTooltipContext";

function SearchForm({onSearch, ...props}) {
  const { setIsPopupTooltipOpen, setTooltip } = React.useContext(PopupTooltipContex);

  function handleSubmit(evt) {
    evt.preventDefault();
    const query = evt.target["query"].value
    const isShortMovie = evt.target["is-short-movie"].checked

    if (!query) {
      setIsPopupTooltipOpen(true)
      setTooltip({message: 'Нужно ввести ключевое слово', btnText: 'Понятно'})
      return
    }

    onSearch(query, isShortMovie);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__field">
        <img className="search__icon" src={searchIconPath} alt="Search icon" />
        <input
          className="search__text"
          placeholder="Фильм"
          type="text"
          name="query"
        />
        <button className="search__submit" />
      </div>

      <label className="search__checkbox">
        <input
          className="search__checkbox_type_functional"
          type="checkbox"
          name="is-short-movie"
        />
        <span className="search__checkbox_type_visible" />
        <p className="search__checkbox-label">Короткометражки</p>
      </label>
    </form>
  );
}

export default SearchForm;
