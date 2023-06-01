import "./Navigation.css";
import NavigationCore from "./NavigationCore";

function NavigationMobile({ onClose, ...props }) {
  return (
    <div className="popup">
      <nav className="nav nav_type_mobile">
        <button className="nav__close-btn" onClick={onClose} />
        <ul className="nav__menu nav__menu_type_mobile">

          <NavigationCore isSideMenu={true} />

        </ul>
      </nav>
    </div>
  );
}

export default NavigationMobile;
