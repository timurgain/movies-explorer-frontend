import React from "react";
import "./Navigation.css";
import NavigationCore from "./NavigationCore";
import Popup from "../Popup/Popup";

function NavigationMobile({ isPopupOpen, ...props }) {

  return (
    <Popup isOpen={isPopupOpen} >
      <nav className="nav nav_type_mobile">
        <ul className="nav__menu nav__menu_type_mobile">
          <NavigationCore isSideMenu={true} />
        </ul>
      </nav>
    </Popup>
  );
}

export default NavigationMobile;
