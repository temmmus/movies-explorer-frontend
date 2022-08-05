import React, { useState } from 'react';
import './Login.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/ValidateEmail';

function Login({ onLogin }) {

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
    onLogin({ values }).then(err => setErrors({...errors, login: err}));
    e.target.reset()
  };


  return (
    <div className='login'>
      <Logo />
      <h2 className='login__title'>Рады видеть!</h2>

      <form className='login__form' name='login' onSubmit={handleSubmit}>
        <label htmlFor='email' className='login__input-label'>Email</label>
        <input 
              type='email'
              name='email'
              className='login__input'
              onChange={handleChange}
              required
            />
        <p className='login__error-message'>{errors.email}</p>

        <label htmlFor='password' className='login__input-label'>Пароль</label>
        <input
              type='password'
              name='password'
              className='login__input'
              onChange={handleChange}
              required
            />
        <p className='login__error-message'>{errors.password}</p>

        <p className='login__error-message login__error-message_type_login'>{errors.login}</p>

        <button
              type='submit'
              className={`login__button ${isValid ? null : 'login__button_disabled'}`}
              disabled={!isValid}
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
 