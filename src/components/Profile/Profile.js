import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile({ user, onLogOut }) {
  return (
    <div className="page">
      <Header loggedIn={true}/>
      <div className='profile'>
          <h2 className='profile__title'>Привет, {user.name}!</h2>
          <form className='profile__form'>
            <div className='profile__wrapper'>
              <label htmlFor="name" className='profile__input-label'>Имя</label>
              <input type='text' name='name' className='profile__input' required value={user.name} />
            </div>

            <div className='profile__wrapper'>
              <label htmlFor="email" className='profile__input-label'>E-mail</label>
              <input type='email' name='email' className='profile__input' required value={user.email}/>
            </div>

            <button type='submit' className='profile__button'>Редактировать</button>
          </form>
          <Link to='/' className='profile__link' onClick={onLogOut}>Выйти из аккаунта</Link>
      </div>
    </div>
  );
}

export default Profile;
 