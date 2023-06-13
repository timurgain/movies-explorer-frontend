import React from "react";
import "./AuthForm.css";
import config from "../../config";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function AuthForm({ submitText, onSubmit, isNameField, ...props }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation({}, {}, false);

  React.useEffect(resetForm, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  return (
    <form className="auth__form" onSubmit={handleSubmit} noValidate>
      {isNameField && (
        <label className="auth__field">
          <span className="auth__label">Имя</span>
          <input
            className={`auth__input ${
              errors.name ? "auth__input_type_error" : ""
            }`}
            onChange={handleChange}
            value={values.name}
            type="text"
            name="name"
            pattern={config.regExp.userNamePattern}
            required
          />
          <span className="auth__error">
            {errors["name"]
              ? "Minimum 2 characters. Use only Latin, Cyrillic, spaces, and hyphens."
              : ""}
          </span>
        </label>
      )}

      <label className="auth__field">
        <span className="auth__label">E-mail</span>
        <input
          className={`auth__input ${
            errors.email ? "auth__input_type_error" : ""
          }`}
          onChange={handleChange}
          value={values.email}
          type="email"
          name="email"
          pattern={config.regExp.emailPattern}
          required
        />
        <span className="auth__error">
          {errors["email"]
            ? "Enter email, keep in mind this pattern: example@mail.com"
            : ""}
        </span>
      </label>

      <label className="auth__field">
        <span className="auth__label">Пароль</span>
        <input
          className={`auth__input ${
            errors.password ? "auth__input_type_error" : ""
          }`}
          onChange={handleChange}
          value={values.password}
          type="password"
          name="password"
          minLength={4}
          required
        />
        <span className="auth__error">{errors["password"]}</span>
      </label>

      <button
        className="auth__submit"
        type="submit"
        disabled={isValid ? false : true}
      >
        {submitText}
      </button>
    </form>
  );
}

export default AuthForm;
