import React from 'react';
import './Register.css';
import Header from '../Header/Header';
import AuthForm from '../AuthForm/AuthForm';

function Register() {


  return (
    <>
      <Header type={'auth'} />

      <div className="register">
        <section className="register__container">
          <h2 className="register__title">Добро пожаловать!</h2>

          <AuthForm submitText={'Зарегистрироваться'} isRegister={true} />

        </section>
      </div>

    </>
  )
}

export default Register;
