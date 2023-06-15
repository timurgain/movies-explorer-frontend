import React from 'react';
import './Tooltip.css';
import iconPath from '../../images/info-icon.png';
import Popup from "../Popup/Popup";


function Tooltip({ isOpen, message, btnText, onClick, ...props }) {

  return (
    <Popup isOpen={isOpen}>
      <div className='tooltip__container'>
        <img className='tooltip__icon' src={iconPath} alt="icon" />
        <p className='tooltip__message'>{message}</p>
        <button className='tooltip__btn' onClick={onClick}>{btnText}</button>
      </div>
    </Popup>
  )
}

export default Tooltip;
