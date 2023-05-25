import React from "react";
import "./Header.css";
import LogoPath from "../../images/logo_app.svg";
import Navigation from "../Navigation/Navigation";

const MOBILE_WIDTH_UP_TO = 1023;

function Header() {

  const [isMobile, setIsMobile] = React.useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false)

  React.useEffect(() => {
    function handleResize() {
      window.innerWidth <= MOBILE_WIDTH_UP_TO
        ? setIsMobile(true)
        : setIsMobile(false);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClickMenuBtn() {
    setIsMobileMenuOpened(true)
  }

  function handleClickMenuCloseBtn() {
    setIsMobileMenuOpened(false)
  }

  return (
    <header className="header">
      <img className="header__logo" src={LogoPath} alt="Logo Movie Explorer" />

      {isMobile
        ? <button className="header__menu-btn" onClick={handleClickMenuBtn} />
        : <Navigation isMobile={false}/>}

      {isMobile && isMobileMenuOpened
        && <Navigation isMobile={true} onClose={handleClickMenuCloseBtn}/>}

    </header>
  );
}

export default Header;
