import React, { useState, useEffect  } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/ValidateEmail';

function Profile({ user, onLogOut, onUpdateUser }) {

  const [values, setValues] = useState({name: user.name, email: user.email});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isUpdated, setIsUpdated] = useState({status: null, message: ''});

  useEffect(() => {
    setValues({name: user.name, email: user.email});
  }, [user.email, user.name])
  
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
    onUpdateUser({ values }).then(res => {
      if (res.message) {
        setIsUpdated({status: false, message: res.message});
      } else {
        setIsUpdated({status: true, message: 'Данные успешно обновлены'});  
      }
    });
  };

  
  return (
    <div className="page">
      <Header loggedIn={true}/>
      <div className='profile'>
          <h2 className='profile__title'>Привет, {user.name}!</h2>
          <form className='profile__form' name='profile' onSubmit={handleSubmit}>
            <div className='profile__wrapper'>
              <label htmlFor="name" className='profile__input-label'>Имя</label>
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
              <label htmlFor="email" className='profile__input-label'>E-mail</label>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='profile__input'
                value={values.email || ''}
                onChange={handleChange}
                required
              />
            </div>
            <p className='profile__error-message'>{errors.email}</p>
            
            <p className={`profile__status-message ${isUpdated.status ?
              'profile__status-message_type_success' : 'profile__status-message_type_error'}`}>
              {isUpdated.message}
            </p>

            <button
              type='submit'
              className={`profile__button ${isValid ? null : 'profile__button_disabled'}`}
              disabled={!isValid}>
                Редактировать
            </button>
          </form>
          <Link to='/' className='profile__link' onClick={onLogOut}>Выйти из аккаунта</Link>
      </div>
    </div>
  );
}

export default Profile;
 