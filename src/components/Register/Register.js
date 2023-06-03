import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Header from "../Header/Header";
import AuthForm from "../AuthForm/AuthForm";

function Register() {
  return (
    <>
      <Header type={"auth"} />

      <div className="register">
        <section className="register__container">
          
          <h2 className="register__title">Добро пожаловать!</h2>

          <AuthForm submitText={"Зарегистрироваться"} isRegister={true} />

          <p className="register__footnote">
            Уже зарегистрированы?{" "}
            <Link className="register__link" to="/signin">
              Войти
            </Link>
          </p>

        </section>
      </div>
    </>
  );
}

export default Register;
