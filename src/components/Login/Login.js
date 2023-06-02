import React from 'react';
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

        </section>
      </div>

    </>
  )
}

export default Login;
