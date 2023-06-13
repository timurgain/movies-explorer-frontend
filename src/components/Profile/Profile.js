import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Profile({ onSubmit, onLogout, ...props }) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const { values, setValues, errors, isValid, handleChange } =
    useFormAndValidation(
      { name: currentUser.name, email: currentUser.email },
      {},
      false
    );

  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    if (!isValid) {
      setIsDisabled(true);
      return;
    }
    setIsDisabled(
      !Object.keys(values).some((key) => values[key] !== currentUser[key])
    );
  }, [currentUser, values, isValid]);

  React.useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  function handleLogout(evt) {
    evt.preventDefault();
    onLogout();
  }

  return (
    <>
      <Header displayNav={true} />

      <div className="profile">
        <section className="profile__container">
          <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>

          <form className="profile__form" onSubmit={handleSubmit}>
            <label className="profile__field">
              <span className="profile__label">Имя</span>
              <input
                className="profile__input"
                onChange={handleChange}
                value={values.name}
                type="text"
                name="name"
                minLength={2}
                required
              />
              <span className="profile__error">{errors["name"]}</span>
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
              <span className="profile__error">{errors["email"]}</span>
            </label>

            <button
              className="profile__btn profile__btn_type_submit"
              type="submit"
              disabled={isDisabled}
            >
              Редактировать
            </button>
          </form>

          <button
            className="profile__btn profile__btn_type_signout"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </section>
      </div>
    </>
  );
}

export default Profile;
