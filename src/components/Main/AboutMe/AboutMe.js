import "./AboutMe.css";
import avatarPath from "../../../images/about-me_tm.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <article className="about-me__container">
        <h2 className="about-me__title">Студент</h2>

        <div className="about-me__content">
          <section className="about-me__about">
            <h3 className="about-me__name">Тимур</h3>
            <h4 className="about-me__profession">Full Stack Web разработчик</h4>
            <p className="about-me__paragraph">
              В команде запустил магазин-склад, а позже трансформировал его в
              онлайн-бизнес. Тогда я и прикоснулся к разработке, начал с backend
              и Python. Затем дополнительно к рабочему опыту, начал и в течение
              двух лет завершил два учебных курса с дедлайнами в
              Яндекс.Практикум (Django, SQL, REST API, JavaScript, React.js,
              Node.js, MongoDB, адаптивная верстка, алгоритмы, тестирование).
            </p>
            <a className="about-me__github" href="https://github.com/timurgain" target="blank">
              GitHub
            </a>
          </section>

          <img
            className="about-me__avatar"
            src={avatarPath}
            alt="Фото разработчика"
          />
        </div>
      </article>
    </div>
  );
}

export default AboutMe;
