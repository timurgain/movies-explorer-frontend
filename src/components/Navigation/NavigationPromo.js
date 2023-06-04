import { Link } from "react-router-dom";
import "./Navigation.css";

function NavigationPromo() {
  return (
    <nav className="nav">
      <ul className="nav__menu nav__menu_type_promo">

        <li className="nav__item">
          <Link to="/signup" className="nav__register">Регистрация</Link>
        </li>

        <li className="nav__item">
          <Link to="/signin" className="nav__login" href="/">Войти</Link>
        </li>

      </ul>
    </nav>
  );
}

export default NavigationPromo;
