import './Header.css';
import Logo from '../Logo/Logo';
import AccountButton from '../AccountButton/AccountButton';
import { Link } from 'react-router-dom';

function Header({ loggedIn }) {
  function onClick() {
    const navModal = document.querySelector(".navmodal");
    navModal.classList.add('navmodal_opened');
  }

  if (loggedIn) {
    return (
      <header className='header header_theme_white'>
        <Logo />
        <nav className="header__links header__links_logedin">
          <div className='header__wrapper'>
            <Link className={`header__link header__link_color_black ${window.location.pathname === '/movies' ? 'header__link_active' : null}`} to='/movies'>Фильмы</Link>
            <Link className={`header__link header__link_color_black ${window.location.pathname === '/movies-saved' ? 'header__link_active' : null}`} to='/movies-saved'>Сохраненные фильмы</Link>
          </div>
          <AccountButton />
        </nav>
        <button type='button' className='header__burger-menu' onClick={onClick}></button>
      </header>
    )
  } else {
    return (
      <header className='header header_theme_dark'>
        <Logo />
        <nav className="header__links">
            <Link className='header__link' to='/signup'>Регистрация</Link>
            <Link className='header__link header__link_type_button header__link_color_black' to='/signin'>Войти</Link>
        </nav>
      </header>
  )
  }
}

export default Header;
 