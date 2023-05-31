import './Promo.css';
import promoImagePath from '../../../images/promo_image.svg'

function Promo() {
  return (
    <div className='promo'>
      <article className='promo__container'>
        <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__image' src={promoImagePath} alt="Scribble" />
      </article>
    </div>
  )
}

export default Promo;
