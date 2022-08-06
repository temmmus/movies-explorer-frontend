import React, { useState } from 'react';
import './Register.css';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/ValidateEmail';

function Register({ onRegister }) {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());

    if (!validateEmail(values.email)) {
      setErrors({...errors, email: 'Указан невалидный email'});
    } 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ values }).then(err => setErrors({...errors, register: err}));
    e.target.reset()
  };


  return (
    <div className="page">
      <div className='register'>
        <Logo />
        <h2 className='register__title'>Добро пожаловать!</h2>

        <form className='register__form' name='register' onSubmit={handleSubmit}>
          <label htmlFor='name' className='register__input-label'>Имя</label>
          <input 
                type='text'
                name='name'
                className='register__input'
                onChange={handleChange}
                minLength='2'
                maxLength='30'
                required
            />
          <p className='register__error-message'>{errors.name}</p>

          <label htmlFor='email' className='register__input-label'>E-mail</label>
          <input
                type='email'
                name='email'
                className='register__input'
                onChange={handleChange}
                required
              />
          <p className='register__error-message'>{errors.email}</p>

          <label htmlFor='password' className='register__input-label'>Пароль</label>
          <input 
                type='password'
                name='password'
                className='register__input'
                onChange={handleChange}
                required
              />
          <p className='register__error-message'>{errors.password}</p>

          <p className='register__error-message register__error-message_type_login'>{errors.register}</p>
          
          <button
                type='submit'
                className={`register__button ${isValid ? null : 'register__button_disabled'}`}
                disabled={!isValid}
                >
                Зарегистрироваться
          </button>

        </form>
        <div className='register__wrapper'>
          <p className='register__text'>Уже зарегистрированы?</p>
          <Link to='/signin' className='register__link'>Войти</Link>
        </div>
      </div>
      <Footer/>
    </div>

  );
}

export default Register;