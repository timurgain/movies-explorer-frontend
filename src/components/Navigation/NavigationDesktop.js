import "./Navigation.css";
import NavigationCore from "./NavigationCore";

function NavigationDesktop() {
  return (
    <nav className="nav">
      <ul className="nav__menu">

        <NavigationCore isSideMenu={false} />

      </ul>
    </nav>
  );
}


export default NavigationDesktop;
