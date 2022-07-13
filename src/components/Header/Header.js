import './Header.css';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to='/'>
        <img src={logo} alt="Лого" className="header__logo"/>
      </Link> 
      <nav className="header__links">
        <Link className='header__link' to='signup'>Регистрация</Link>
        <Link className='header__link header__link_button' to='signin'>Войти</Link>
      </nav>
    </header>
  );
}

export default Header;
 