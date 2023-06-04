import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <section className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button className="not-found__back-btn" onClick={() => navigate(-1)}>
          Назад
        </button>
      </section>
    </div>
  );
}

export default PageNotFound;
