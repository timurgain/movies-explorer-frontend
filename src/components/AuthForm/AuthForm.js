import React from "react";
import "./AuthForm.css";

function AuthForm({ submitText, onSubmit, isRegister, ...props }) {
  const [values, setValues] = React.useState({});

  function handleChange(evt) {
    console.log(evt);
    console.log(evt.target.validity.valid);
    console.log(evt.target.validationMessage);
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <form className="auth__form" action="">
      {isRegister && (
        <label className="auth__field">
          <span className="auth__label">Имя</span>
          <input
            className="auth__input"
            onChange={handleChange}
            value={values.name}
            type="text"
            name="name"
            minLength={2}
            required
          />
          <span className="auth__error">{}</span>
        </label>
      )}

      <label className="auth__field">
        <span className="auth__label">E-mail</span>
        <input
          className="auth__input"
          onChange={handleChange}
          value={values.email}
          type="email"
          name="email"
          required
        />
      </label>

      <label className="auth__field">
        <span className="auth__label">Пароль</span>
        <input
          className="auth__input"
          onChange={handleChange}
          value={values.password}
          type="password"
          name="password"
          minLength={4}
          required
        />
      </label>

      <button className="auth__submit" type="submit">
        {submitText}
      </button>
    </form>
  );
}

export default AuthForm;
