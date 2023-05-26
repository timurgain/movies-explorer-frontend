import React from "react";
import "./Header.css";
import { DeviceContext } from "../../contexts/DeviceContext";
import LogoPath from "../../images/logo_app.svg";
import Navigation from "../Navigation/Navigation";


function Header() {

  const device = React.useContext(DeviceContext);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false)


  function handleClickToggleMenu() {
    setIsMobileMenuOpened(!isMobileMenuOpened)
  }

  return (
    <header className="header">
      <img className="header__logo" src={LogoPath} alt="Logo Movie Explorer" />

      {(device === 'mobile' || device === 'tablet')
        ? <button className="header__menu-btn" onClick={handleClickToggleMenu} />
        : <Navigation isMobile={false}/>}

      {(device === 'mobile' || device === 'tablet') && isMobileMenuOpened
        && <Navigation isMobile={true} onClose={handleClickToggleMenu}/>}

    </header>
  );
}

export default Header;
