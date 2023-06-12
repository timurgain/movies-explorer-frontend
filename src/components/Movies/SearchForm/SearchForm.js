import React from "react";
import "./SearchForm.css";
import searchIconPath from "../../../images/icon_search.svg";
import PopupContex from "../../../contexts/PopupContext";

function SearchForm({ onSearch, lastSearch, ...props }) {
  const { showTooltip } = React.useContext(PopupContex);

  const [values, setValues] = React.useState({
    query: '',
    isShortMovie: false,
  });

  React.useEffect(() => {
    setValues({
      query: lastSearch.query,
      isShortMovie: lastSearch.isShortMovie,
    })
  }, [lastSearch])

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.query) {
      showTooltip("Нужно ввести ключевое слово", "Понятно")
      return;
    }
    onSearch(values.query, values.isShortMovie);
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
          onChange={(evt) => setValues({...values, query: evt.target.value})}
          value={values.query}
        />
        <button className="search__submit" />
      </div>

      <label className="search__checkbox">
        <input
          className="search__checkbox_type_functional"
          type="checkbox"
          name="is-short-movie"
          onChange={(evt) => setValues({...values, isShortMovie: evt.target.checked})}
          checked={values.isShortMovie}
        />
        <span className="search__checkbox_type_visible" />
        <p className="search__checkbox-label">Короткометражки</p>
      </label>
    </form>
  );
}

export default SearchForm;
