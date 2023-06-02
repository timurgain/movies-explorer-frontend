import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { DeviceContext } from "../../contexts/DeviceContext";
import LogoPath from "../../images/logo_app.svg";
import Navigation from "../Navigation/Navigation";

function Header({ ...props }) {
  const isPromo = props.type === "promo" ? true : false;
  const isAuth = props.type === "auth" ? true : false;

  const device = React.useContext(DeviceContext);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  function handleClickToggleMenu() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  return (
    <header className={`header ${isPromo ? "header_type_promo" : ""}`}>
      <div className={`header__container ${isAuth ? "header__container_type_auth" : ""}`}>

        <Link to="/" className="header__logo">
          <img src={LogoPath} alt="Logo Movie Explorer" />
        </Link>

        {isPromo &&
          <Navigation isPromo={true} />}

        {(device === "desktop") && (!isPromo && !isAuth) &&
          <Navigation isMobile={false} />}

        {(device === "mobile" || device === "tablet") && isMobileMenuOpened &&
          <Navigation isMobile={true} onClose={handleClickToggleMenu} />
        }

        {(device === "mobile" || device === "tablet") && (!isPromo && !isAuth) &&
          <button className="header__menu-btn" onClick={handleClickToggleMenu} />
        }

      </div>
    </header>
  );
}

export default Header;
