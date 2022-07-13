import './MoviesCard.css';
import image from '../../images/33_слова_о_дизайне.jpg';

function MoviesCard() {
  return (
    <li className='card'>
      <img className='card__image' alt='' src={image} />
      <div className='card__wrapper'>
        <h3 className='card__title'>Название фильма</h3>
        <button type='button' className='card__like-button'></button>
      </div>
      <p className='card__text'>1ч 42м</p>
    </li>
  );
}

export default MoviesCard;