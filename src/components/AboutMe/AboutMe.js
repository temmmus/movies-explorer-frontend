import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/myphoto.jpg';

function AboutMe() {
    return (
        <section className="about-me">
            <SectionTitle text="Студент"/>
            <div className="about-me__content">
                <article className="about-me__article">
                    <h3 className="about-me__subtitle">Артём</h3>
                    <h4 className="about-me__subsubtitle">Фронтенд-разработчик, 31 год</h4>
                    <p className="about-me__text">Я родился и живу в Екатеринбурге, закончил факультет экономики УРФУ. У меня есть жена и двое детей. Я люблю слушать музыку, а ещё увлекаюсь плаванием. Недавно начал кодить. С 2015 года работал в компании «». После того, как прошёл курс по веб-разработке, начал заниматься ___ и ___.</p>
                    <ul className="about-me__links">
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="about-me__link">Facebook</a></li>
                        <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="about-me__link">Github</a></li>
                    </ul>
                </article>
                <img className="about-me__photo" src={photo} alt="Фото"/>
            </div>
        </section>
    );
  }
  
  export default AboutMe;