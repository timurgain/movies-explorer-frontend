import "./Navigation.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { DeviceContext } from "../../contexts/DeviceContext";
import PopupContext from "../../contexts/PopupContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NavigationPromo from "./NavigationPromo";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

function Navigation({ onClose, ...props }) {
  const pathname = useLocation().pathname;

  const device = React.useContext(DeviceContext);
  const { loggedIn } = React.useContext(CurrentUserContext);
  const { Nav: {isPopupNavOpen, setIsPopupNavOpen} } =
    React.useContext(PopupContext);

  const [isCompact, setIsCompact] = React.useState(true);

  React.useEffect(() => {
    setIsPopupNavOpen(false);
  }, [setIsPopupNavOpen]);

  React.useEffect(() => {
    if (device === "desktop") setIsCompact(false);
    if (device === "mobile" || device === "tablet") setIsCompact(true);
  }, [device, setIsCompact]);

  function handleClickOpenPopupMenu() {
    setIsPopupNavOpen(true);
  }

  function getClassMenuBtn() {
    if (pathname === '/') {
      return "header__menu-btn header__menu-btn_type_promo"
    }
    return "header__menu-btn"
  }

  return (
    <>
      {!loggedIn && <NavigationPromo />}

      {loggedIn && !isCompact && <NavigationDesktop />}

      {loggedIn && isCompact && (
        <button
          className={getClassMenuBtn()}
          onClick={handleClickOpenPopupMenu}
        />
      )}

      <NavigationMobile isPopupNavOpen={isPopupNavOpen} />
    </>
  );
}

export default Navigation;
