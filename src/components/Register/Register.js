import React, { useState, useEffect } from 'react';
import './Register.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const initialValues = { name: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formIsValid, setFormIsValid] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && formValues !== initialValues) {
      setFormIsValid(true);
    };
  }, [ formValues, formIsValid, formErrors ]);

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    // console.log(name, value)


    setFormValues({ ...formValues, [name]: value });
    // setFormValues((state) => {

    //   console.log(state, 'jopa')
    //   return state;
    // });
    // await setFormValues(state => ({...state, [name]: value}));

    // console.log(formValues)
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ formValues });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Поле Имя обязательно";
    } else if (values.name.length < 2) {
      errors.name = "Имя должно состоять минимум из 2 букв";
    } else if (values.name.length > 30) {
      errors.name = "Имя не должно быть длинее 30 букв";
    }

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
    <div className='register'>
      <Logo />
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form' onSubmit={handleSubmit}>
        <label htmlFor="name" className='register__input-label'>Имя</label>
        <input 
              type='text'
              name='name'
              className='register__input'
              onChange={handleChange}
              required
           />
        <p className='register__error-message'>{formErrors.name}</p>

        <label htmlFor="email" className='register__input-label'>E-mail</label>
        <input 
              type='email'
              name='email'
              className='register__input'
              onChange={handleChange}
              required
            />
        <p className='register__error-message'>{formErrors.email}</p>

        <label htmlFor="password" className='register__input-label'>Пароль</label>
        <input 
              type='password'
              name='password'
              className='register__input'
              onChange={handleChange}
              required
            />
        <p className='register__error-message'>{formErrors.password}</p>
        
        <button 
              type='submit'
              className={`register__button ${formIsValid ? null : 'register__button_disabled'}`}
              disabled={!formIsValid}
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