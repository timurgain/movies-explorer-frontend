import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import iconProfilePath from "../../images/icon_profile.svg";

function NavigationCore({ isSideMenu, ...props }) {
  return (
    <>
      {isSideMenu && (
        <li className="nav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__btn nav__btn_active" : "nav__btn"
            }
          >
            Главная
          </NavLink>
        </li>
      )}

      <li className="nav__item">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "nav__btn nav__btn_active" : "nav__btn"
          }
        >
          Фильмы
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            isActive ? "nav__btn nav__btn_active" : "nav__btn"
          }
        >
          Сохранённые фильмы
        </NavLink>
      </li>

      <li className="nav__item nav__item_type_profile">
        <Link to='/profile' className="nav__btn nav__btn_type_profile">
          <img src={iconProfilePath} alt="Profile icon" />
          Аккаунт
        </Link>
      </li>

    </>
  );
}

export default NavigationCore;
