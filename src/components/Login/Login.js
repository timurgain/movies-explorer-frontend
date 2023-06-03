import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../Header/Header';
import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <>
      <Header type={'auth'} />

      <div className="login">
        <section className="login__container">
          <h2 className="login__title">Рады видеть!</h2>

          <AuthForm submitText={'Войти'} isRegister={false} />

          <p className="login__footnote">
            Ещё не зарегистрированы?{" "}
            <Link className="login__link" to="/signup">
              Регистрация
            </Link>
          </p>

        </section>
      </div>

    </>
  )
}

export default Login;
