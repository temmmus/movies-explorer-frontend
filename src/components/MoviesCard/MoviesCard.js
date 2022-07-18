import './MoviesCard.css';
import image from '../../images/33_слова_о_дизайне.jpg';

function MoviesCard() {
  return (
    <li className='card'>
      <div className='card__wrapper'>
        <h3 className='card__title'>Название фильма</h3>
        <p className='card__text'>1ч 42м</p>
      </div>
      <img className='card__image' alt='Постер' src={image} />
      <button type='button' className='card__save-button'>Сохранить</button>
    </li>
  );
}

export default MoviesCard;