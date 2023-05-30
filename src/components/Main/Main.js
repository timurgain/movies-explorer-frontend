import './Main.css';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Footer from '../Footer/Footer';


function Main() {
  return (
    <>
      <Header type={'promo'} />
      <Promo />
      <AboutProject />
      <Techs />

      <Footer />
    </>
  )
}

export default Main;
