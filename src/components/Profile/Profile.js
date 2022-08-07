import React, { useState, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Profile({ onLogOut, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [values, setValues] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isUpdated, setIsUpdated] = useState({ status: null, message: '' });

  useEffect(() => {
    setIsDisabled(
      (currentUser.name === values.name &&
        currentUser.email === values.email) ||
        !isValid
    );
  }, [currentUser.email, currentUser.name, isValid, values.email, values.name]);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ values }).then((res) => {
      setIsUpdated(
        res.message
          ? { status: false, message: res.message }
          : { status: true, message: 'Данные успешно обновлены' }
      );
    });
  };

  return (
    <div className='page'>
      <Header loggedIn={true} />
      <div className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' name='profile' onSubmit={handleSubmit}>
          <div className='profile__wrapper'>
            <label htmlFor='name' className='profile__input-label'>
              Имя
            </label>
            <input
              type='text'
              name='name'
              placeholder='Имя'
              className='profile__input'
              value={values.name || ''}
              onChange={handleChange}
              minLength='2'
              maxLength='30'
              required
            />
          </div>
          <p className='profile__error-message'>{errors.name}</p>

          <div className='profile__wrapper'>
            <label htmlFor='email' className='profile__input-label'>
              E-mail
            </label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='profile__input'
              value={values.email || ''}
              onChange={handleChange}
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
              required
            />
          </div>
          <p className='profile__error-message'>{errors.email}</p>

          <p
            className={`profile__status-message ${
              isUpdated.status
                ? 'profile__status-message_type_success'
                : 'profile__status-message_type_error'
            }`}
          >
            {isUpdated.message}
          </p>

          <button
            type='submit'
            className={`profile__button ${
              isDisabled ? 'profile__button_disabled' : null
            }`}
            disabled={isDisabled}
          >
            Редактировать
          </button>
        </form>
        <Link to='/' className='profile__link' onClick={onLogOut}>
          Выйти из аккаунта
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
