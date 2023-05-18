import "./SearchForm.css";
import searchIconPath from "../../../images/icon_search.svg";

function SearchForm() {
  return (
    <form className="search" action="">
      <img className="search__icon" src={searchIconPath} alt="Search icon" />
      <input className="search__text" placeholder="Фильм" type="text" />
      <button className="search__submit" />

      <label className="search__checkbox">
        <input className="search__checkbox_type_functional" type="checkbox" />
        <span className="search__checkbox_type_visible" />
        <p className="search__checkbox-label">Короткометражки</p>
      </label>
    </form>
  );
}

export default SearchForm;
