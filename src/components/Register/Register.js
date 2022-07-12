import './Register.css';
import logo from '../../images/auth-logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='register'>
    <img src={logo} alt="Лого" className="register__logo"/> 
    <h2 className='register__header'>Добро пожаловать!</h2>
    <form className='register__form'>
        <label htmlFor="name" className='register__input-label'>Имя</label>
        <input type='text' name='name' className='register__input' required/>

        <label htmlFor="email" className='register__input-label'>E-mail</label>
        <input type='email' name='email' className='register__input' required/>

        <label htmlFor="password" className='register__input-label'>Пароль</label>
        <input type='password' name='password' className='register__input' required/>

        <button type='submit' className='register__button'>Зарегистрироваться</button>
    </form>
    <div className='register__wrapper'>
        <p className='register__text'>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__link'>Войти</Link>
  </div>
</div>
  );
}

export default Register;