
import './Footer.css';

function Footer() {
    return (
      <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <nav className="footer__navigation">
              <p className="footer__copyright">&copy; 2022. temmmus</p>
              <ul className="footer__links">
                <li><a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a></li>
                <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="footer__link">Github</a></li>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__link">Facebook</a></li>
               </ul>
            </nav>
      </footer>
    );
  }
  
  export default Footer;