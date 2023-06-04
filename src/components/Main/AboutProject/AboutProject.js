import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="about">
      <article className="about__container">
        <h2 className="about__title">О проекте</h2>

        <ul className="about__content">
          <li className="about__item">
            <h3 className="about__fact">Дипломный проект включал 5 этапов</h3>
            <p className="about__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>

          <li className="about__item">
            <h3 className="about__fact">На выполнение диплома ушло 5 недель</h3>
            <p className="about__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <div className="about__graph">
          <span className="about__term about__term_highlighted">1 неделя</span>
          <span className="about__term">4 недели</span>
          <span className="about__part">Back-end</span>
          <span className="about__part">Front-end</span>
        </div>
      </article>
    </div>
  );
}

export default AboutProject;
