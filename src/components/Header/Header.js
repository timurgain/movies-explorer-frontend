import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LogoPath from "../../images/logo_app.svg";
import Navigation from "../Navigation/Navigation";

function Header({ displayNav, typeAuth, typePromo, ...props }) {

  return (
    <header className={`header ${typePromo ? "header_type_promo" : ""}`}>
      <div className={`header__container ${typeAuth ? "header__container_type_auth" : ""}`}>

        <Link to="/" className="header__logo">
          <img src={LogoPath} alt="Logo Movie Explorer" />
        </Link>

        {displayNav &&
          <Navigation isHeaderPromo={typePromo} />}

      </div>
    </header>
  );
}

export default Header;
