import React, { useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import ValidateEmail from '../Utils/ValidateEmail';

function Profile({ user, onLogOut, onUpdateUser }) {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // const [name, setName] = useState(user.name);
  // const [email, setEmail] = useState(user.email);
  // const [updateStatus, setUpdateStatus] = useState('');

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());

    // if (!isValidEmail(values.email)) {
    //   setErrors({...errors, email: 'Указан невалидный email'});
    // } else {
    //   setErrors({...errors, email: ''});
    // }
  };

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(name, email).then(res => {
      if (res.message) {
        setUpdateStatus(res.message);
        console.log(updateStatus)
      } else {
        setUpdateStatus('Данные успешно обновлены');
      }
    });
  }


  return (
    <div className="page">
      <Header loggedIn={true}/>
      <div className='profile'>
          <h2 className='profile__title'>Привет, {user.name}!</h2>
          <form className='profile__form' onSubmit={handleSubmit}>
            <div className='profile__wrapper'>
              <label htmlFor="name" className='profile__input-label'>Имя</label>
              <input
                type='text'
                name='name'
                placeholder='Имя'
                className='profile__input'
                value={name || ''}
                onChange={(e) => setName(e.target.value)}
                minLength='2'
                maxLength='30'
                required
              />
            </div>

            <div className='profile__wrapper'>
              <label htmlFor="email" className='profile__input-label'>E-mail</label>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='profile__input'
                value={email || ''}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <p className='login__error-message login__error-message_type_login'>{updateStatus}</p>

            <button type='submit' className='profile__button'>Редактировать</button>
          </form>
          <Link to='/' className='profile__link' onClick={onLogOut}>Выйти из аккаунта</Link>
      </div>
    </div>
  );
}

export default Profile;
 