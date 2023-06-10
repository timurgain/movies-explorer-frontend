import "./Navigation.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import iconProfilePath from "../../images/icon_profile.svg";

function NavigationCore({ isSideMenu, ...props }) {
  const pathname = useLocation().pathname;

  function getClassNavBtn(isActive) {
    if (pathname === '/' && !isSideMenu) {
      if (isActive) return "nav__btn nav__btn_type_promo nav__btn_active";
      return "nav__btn nav__btn_type_promo"
    }
    if (isActive) return "nav__btn nav__btn_active";
    return "nav__btn"
  }

  function getClassProfileBtn() {
    if (pathname === '/') {
      return "nav__btn nav__btn_type_profile-promo"
    }
    return "nav__btn nav__btn_type_profile"
  }

  function getClassProfileIcon() {
    if (pathname === '/') {
      return "nav__icon nav__icon_type_promo"
    }
    return "nav__icon"
  }

  return (
    <>
      {isSideMenu && (
        <li className="nav__item">
          <NavLink
            to="/"
            className={({ isActive }) => getClassNavBtn(isActive) }
          >
            Главная
          </NavLink>
        </li>
      )}

      <li className="nav__item">
        <NavLink
          to="/movies"
          className={({ isActive }) => getClassNavBtn(isActive) }
        >
          Фильмы
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          to="/saved-movies"
          className={({ isActive }) => getClassNavBtn(isActive) }
        >
          Сохранённые фильмы
        </NavLink>
      </li>

      <li className="nav__item nav__item_type_profile">
        <Link to='/profile' className={getClassProfileBtn()}>
          <img className={getClassProfileIcon()} src={iconProfilePath} alt="Profile icon" />
          Аккаунт
        </Link>
      </li>

    </>
  );
}

export default NavigationCore;
