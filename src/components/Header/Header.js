import './Header.css';
import headerLogo from '../../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
        <img src={headerLogo} alt="Лого" className="header__logo"/> 
        <nav className="header__links">
            <a href="#" className="header__link">Регистрация</a>
            <a href="#" className="header__link header__link_button">Войти</a>
        </nav>
    </header>
  );
}

export default Header;
 