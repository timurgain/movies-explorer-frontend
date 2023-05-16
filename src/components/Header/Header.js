import "./Header.css";
import LogoPath from "../../images/logo_app.svg";
import Navigation from "../Navigation/Navigation"

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={LogoPath} alt="Logo Movie Explorer" />
      <Navigation />
    </header>
  );
}

export default Header;
