import './Main.css';
import Header from '../Header/Header';
import Promo from './Promo/Promo';

import Footer from '../Footer/Footer';


function Main() {
  return (
    <>
      <Header type={'promo'} />
      <Promo />
      <Footer />
    </>
  )
}

export default Main;
