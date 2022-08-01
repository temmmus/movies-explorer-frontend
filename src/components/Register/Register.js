import React, { useState, useCallback } from 'react';
import './Register.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

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
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    onRegister({ values });
  };

  return (
    <div className='register'>
      <Logo />
      <h2 className='register__title'>Добро пожаловать!</h2>
      {/* <form className='register__form' onChange={handleChange} onSubmit={useFormWithValidation}> */}
      <form className='register__form' onChange={handleChange} onSubmit={handleSubmit}>
        <label htmlFor="name" className='register__input-label'>Имя</label>
        <input 
              type='text'
              name='name'
              className='register__input'
              required
           />
        <p className='register__error-message'>{errors.name}</p>

        <label htmlFor="email" className='register__input-label'>E-mail</label>
        <input 
              type='email'
              name='email'
              className='register__input'
              required
            />
        <p className='register__error-message'>{errors.email}</p>

        <label htmlFor="password" className='register__input-label'>Пароль</label>
        <input 
              type='password'
              name='password'
              className='register__input'
              required
            />
        <p className='register__error-message'>{errors.password}</p>
        
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
  );
}

export default Register;