import './Popup.css';

function Popup({isOpen, ...props}) {


  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <button className="popup__close-btn" />

      {props.children}

    </div>
  )
}

export default Popup;
