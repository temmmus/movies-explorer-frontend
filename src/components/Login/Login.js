import './Login.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <Logo />
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
 