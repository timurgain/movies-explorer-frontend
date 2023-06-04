import "./Navigation.css";
import React from "react";
import { DeviceContext } from "../../contexts/DeviceContext";
import PopupContext from "../../contexts/PopupContext";
import NavigationPromo from "./NavigationPromo";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

function Navigation({ isHeaderPromo, onClose, ...props }) {

  const device = React.useContext(DeviceContext);
  const {isPopupOpen, setIsPopupOpen} = React.useContext(PopupContext);

  const [isCompact, setIsCompact] = React.useState(true);

  React.useEffect(() => {
    setIsPopupOpen(false)
  },[setIsPopupOpen])

  React.useEffect(() => {
    if (device === "desktop") setIsCompact(false);
    if (device === "mobile" || device === "tablet") setIsCompact(true);
  }, [device, setIsCompact])


  function handleClickOpenPopupMenu() {
    setIsPopupOpen(true);
  }

  return (
    <>
      {isHeaderPromo &&
        <NavigationPromo />}

      {!isHeaderPromo && !isCompact &&
        <NavigationDesktop />}

      {isCompact && !isHeaderPromo &&
        <button className="header__menu-btn" onClick={handleClickOpenPopupMenu} />
      }

      <NavigationMobile isPopupOpen={isPopupOpen} />
    </>
  );
}

export default Navigation;
