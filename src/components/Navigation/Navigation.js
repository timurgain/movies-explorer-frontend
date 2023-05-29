import "./Navigation.css";
import NavigationPromo from "./NavigationPromo";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

function Navigation({ isMobile, isPromo, onClose, ...props }) {

  return (
    <>
      {isPromo &&
        <NavigationPromo />}

      {!isPromo && !isMobile &&
        <NavigationDesktop />}

      {isMobile &&
        <NavigationMobile onClose={onClose} />}
    </>
  );
}

export default Navigation;
