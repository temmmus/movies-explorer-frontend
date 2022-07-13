import './Promo.css';
import background from '../../images/promo-background.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a href='#section-about-project' className="promo__link">Узнать больше</a>
      </div>  
      <img className="promo__image" src={background} alt="Промо"/>
    </section>
  );
}

export default Promo;
