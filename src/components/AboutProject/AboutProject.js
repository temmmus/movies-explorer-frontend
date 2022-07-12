import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
    return (
        <section className="about" id="section-about-project">
            <SectionTitle text="О проекте"/>
            <div className="about__content">
                <article className="about__article">
                    <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </article>
                <article className="about__article">
                    <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className="about__timeline">
                <div className="about__timeline-column about__timeline-column_left">
                    <p className="about__timeline-title about__timeline-title_colored">1 неделя</p>
                    <p className="about__timeline-text">Back-end</p>
                </div>
                <div className="about__timeline-column about__timeline-column_right">
                    <p className="about__timeline-title">4 недели</p>
                    <p className="about__timeline-text">Front-end</p>
                </div>
            </div>
        </section>
    );
  }
  
  export default AboutProject;