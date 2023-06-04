import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="porfolio">
      <section className="porfolio__container">
        <h3 className="porfolio__title">Портфолио</h3>
        <ul className="porfolio__list">
          <li className="porfolio__item">
            <a
              className="porfolio__link"
              href="https://timurgain.github.io/how-to-learn/"
              target="blank"
            >
              Статичный сайт
            </a>
          </li>
          <li className="porfolio__item">
            <a
              className="porfolio__link"
              href="https://timurgain.github.io/russian-travel/"
              target="blank"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="porfolio__item">
            <a
              className="porfolio__link"
              href="https://timur.nomoredomains.monster/"
              target="blank"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
