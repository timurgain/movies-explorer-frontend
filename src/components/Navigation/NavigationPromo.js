import "./Navigation.css";
import iconProfilePath from "../../images/icon_profile.svg";

function NavigationPromo() {
  return (
    <nav className="nav">
      <ul className="nav__menu nav__menu_type_promo">
        
        <li className="nav__item">
          <a className="nav__register" href="/">Регистрация</a>
        </li>

        <li className="nav__item">
          <a className="nav__login" href="/">Войти</a>
        </li>

      </ul>
    </nav>
  );
}

export default NavigationPromo;
