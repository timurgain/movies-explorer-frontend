import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile() {
  const currentUser = React.useContext(CurrentUserContext);

  const [values, setValues] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <>
      <Header />

      <div className="profile">
        <section className="profile__container">
          <h2 className="profile__title">{`Привет, ${values.name}!`}</h2>

          <form className="profile__form" action="">
            <label className="profile__field">
              <span className="profile__label">Имя</span>
              <input
                className="profile__input"
                onChange={handleChange}
                value={values.name}
                type="text"
                name="name"
                required
              />
            </label>

            <label className="profile__field">
              <span className="profile__label">E-mail</span>
              <input
                className="profile__input"
                onChange={handleChange}
                value={values.email}
                type="email"
                name="email"
                required
              />
            </label>

            <button
              className="profile__btn profile__btn_type_submit"
              type="submit"
            >
              Редактировать
            </button>
          </form>

          <button className="profile__btn profile__btn_type_signout">
            Выйти из аккаунта
          </button>
        </section>
      </div>
    </>
  );
}

export default Profile;
