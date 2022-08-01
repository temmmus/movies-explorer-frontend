import './MoviesCard.css';

function MoviesCard({ movie }) {
  return (
    <li className='card'>
      <div className='card__wrapper'>
        <h3 className='card__title'>{movie.nameRU}</h3>
        <p className='card__text'>{movie.duration} минут</p>
      </div>   
      <a className='card__link' href={movie.trailerLink} target='_blank' rel="noreferrer">
        <img className='card__image' alt='Постер' src={'https://api.nomoreparties.co' + movie.image.url}/>
      </a>
      <button type='button' className='card__save-button card__save-button_type_inactive'></button>
    </li>
  );
}

export default MoviesCard;