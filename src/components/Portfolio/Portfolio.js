import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__list-item">
                    <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="portfolio__link">
                        Статичный сай
                        <i className="portfolio__link-icon"/>
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="portfolio__link">
                        Адаптивный сайт
                        <i className="portfolio__link-icon"/>
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="portfolio__link">
                        Одностраничное приложение
                        <i className="portfolio__link-icon"/>
                    </a>
                </li>
            </ul>
        </section>
    );
  }
  
  export default Portfolio;