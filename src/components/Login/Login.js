import React, { useState, useEffect } from 'react';
import './Login.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formIsValid, setFormIsValid] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && formValues !== initialValues) {
      setFormIsValid(true);
    };
  }, [ formValues, formIsValid, formErrors ]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ formValues });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Поле Email обязательно";
    } else if (!regex.test(values.email)) {
      errors.email = "Укажите email в корректном формате";
    };

    if (!values.password) {
      errors.password = "Поле Password обязательно";
    };

    return errors;
  };

  return (
    <div className='login'>
      <Logo />
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <label htmlFor="email" className='login__input-label'>Email</label>
        <input 
              type='email'
              name='email'
              className='login__input'
              onChange={handleChange}
              required
            />
        <p className='login__error-message'>{formErrors.email}</p>

        <label htmlFor="password" className='login__input-label'>Пароль</label>
        <input
              type='password'
              name='password'
              className='login__input'
              onChange={handleChange}
              required
            />
        <p className='login__error-message'>{formErrors.password}</p>

        <button
              type='submit'
              className={`login__button ${formIsValid ? null : 'login__button_disabled'}`}
              disabled={!formIsValid}
              >
          Войти
        </button>
      </form>
      <div className='login__wrapper'>
        <p className='login__text'>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='login__link'>Регистрация</Link>
      </div>
    </div>
  );
}

export default Login;
 