import "./Navigation.css";
import React from "react";
import { DeviceContext } from "../../contexts/DeviceContext";
import PopupNavContext from "../../contexts/PopupNavContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NavigationPromo from "./NavigationPromo";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

function Navigation({ isHeaderPromo, onClose, ...props }) {
  const device = React.useContext(DeviceContext);
  const { loggedIn } = React.useContext(CurrentUserContext);
  const { isPopupNavOpen, setIsPopupNavOpen } =
    React.useContext(PopupNavContext);

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

  return (
    <>
      {isHeaderPromo && <NavigationPromo />}

      {!isHeaderPromo && !isCompact && <NavigationDesktop />}

      {isCompact && !isHeaderPromo && (
        <button
          className="header__menu-btn"
          onClick={handleClickOpenPopupMenu}
        />
      )}

      <NavigationMobile isPopupNavOpen={isPopupNavOpen} />
    </>
  );
}

export default Navigation;
