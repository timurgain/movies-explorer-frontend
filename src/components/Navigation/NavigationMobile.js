import "./Navigation.css";
import iconProfilePath from "../../images/icon_profile.svg";

function NavigationMobile({ onClose, ...props }) {
  return (
    <div className="popup">
      <nav className="nav nav_type_mobile">
        <button className="nav__close-btn" onClick={onClose} />
        <ul className="nav__menu nav__menu_type_mobile">
          <li className="nav__item">
            <button className="nav__btn">Главная</button>
          </li>

          <li className="nav__item">
            <button className="nav__btn">Фильмы</button>
          </li>

          <li className="nav__item">
            <button className="nav__btn">Сохранённые фильмы</button>
          </li>

          <li className="nav__item nav__item_type_profile">
            <button className="nav__btn nav__btn_type_profile">
              <img src={iconProfilePath} alt="Profile icon" />
              Аккаунт
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationMobile;
