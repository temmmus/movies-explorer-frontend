import './NavModal.css';
import { Link } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';

function NavModal() {
  return (
    <nav className='navmodal'>
        <button type="button" className='navmodal__close-button' />
        <ul className='navmodal__links'>
            <Link className={`navmodal__link ${window.location.pathname === '/' ? 'navmodal__link_active' : null}`} to='/'>Главная</Link>
            <Link className={`navmodal__link ${window.location.pathname === '/movies' ? 'navmodal__link_active' : null}`} to='/movies'>Фильмы</Link>
            <Link className={`navmodal__link ${window.location.pathname === '/saved-movies' ? 'navmodal__link_active' : null}`} to='/saved-movies'>Сохраненные фильмы</Link>
        </ul>
        <div className='navmodal__wrapper'>
            <AccountButton />
        </div>
    </nav>
  );
}

export default NavModal;