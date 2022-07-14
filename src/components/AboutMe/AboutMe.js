import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/myphoto.jpg';

function AboutMe() {
    return (
        <section className="about-me" id="section-about-me">
            <SectionTitle text="Студент"/>
            <div className="about-me__content">
                <article className="about-me__article">
                    <h3 className="about-me__title">Артём</h3>
                    <h4 className="about-me__subtitle">Фронтенд-разработчик, 31 год</h4>
                    <p className="about-me__text">Я родился и живу в Екатеринбурге, закончил высшую школу экономики УрФУ. У меня есть жена и двое детей. Я люблю слушать музыку, а ещё увлекаюсь плаванием. Недавно начал кодить.</p>
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