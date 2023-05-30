import './Main.css';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Footer from '../Footer/Footer';


function Main() {
  return (
    <>
      <Header type={'promo'} />
      <Promo />
      <AboutProject />

      <Footer />
    </>
  )
}

export default Main;
