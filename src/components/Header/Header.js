import React from "react";
import "./Header.css";
import { DeviceContext } from "../../contexts/DeviceContext";
import LogoPath from "../../images/logo_app.svg";
import Navigation from "../Navigation/Navigation";

function Header({ ...props }) {
  const isPromo = props.type === "promo" ? true : false;
  const device = React.useContext(DeviceContext);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  function handleClickToggleMenu() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  return (
    <header className={`header ${isPromo ? "header_type_promo" : ""}`}>
      <div className="header__container">
        <img
          className="header__logo"
          src={LogoPath}
          alt="Logo Movie Explorer"
        />

        {isPromo &&
          <Navigation isPromo={true} />}

        {device === "desktop" && !isPromo &&
          <Navigation isMobile={false} />}

        {(device === "mobile" || device === "tablet") && !isPromo && (
          <button className="header__menu-btn" onClick={handleClickToggleMenu}/>
        )}

        {(device === "mobile" || device === "tablet") && isMobileMenuOpened && (
          <Navigation isMobile={true} onClose={handleClickToggleMenu} />
        )}
      </div>
    </header>
  );
}

export default Header;
