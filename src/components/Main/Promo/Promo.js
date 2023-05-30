import './Promo.css';
import promoImagePath from '../../../images/promo_image.svg'

function Promo() {
  return (
    <div className='promo'>
      <div className='promo__container'>
        <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__image' src={promoImagePath} alt="Scribble" />
      </div>
    </div>
  )
}

export default Promo;
