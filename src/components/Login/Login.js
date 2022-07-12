import './Login.css';
import logo from '../../images/auth-logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
        <img src={logo} alt="Лого" className="login__logo"/> 
        <h2 className='login__header'>Рады видеть!</h2>
        <form className='login__form'>
            <label htmlFor="password" className='login__input-label'>Пароль</label>
            <input type='password' name='password' className='login__input' required/>

            <label htmlFor="password" className='login__input-label'>Пароль</label>
            <input type='password' name='password' className='login__input' required/>

            <button type='submit' className='login__button'>Войти</button>
        </form>
        <div className='login__wrapper'>
            <p className='login__text'>Ещё не зарегистрированы?</p>
            <Link to='/signup' className='login__link'>Регистрация</Link>
      </div>
    </div>
  );
}

export default Login;
 