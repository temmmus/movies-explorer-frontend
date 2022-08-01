import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import './MoviesCard.css';

function MoviesCard({ movie, onMovieLike }) {
  function handleLikeClick() {
    onMovieLike(movie);
  }

  const currentUser = React.useContext(CurrentUserContext);

  const movieLikeButtonClassName = `card__save-button ${
    movie.owner === currentUser._id ? 'card__save-button_type_active' : 'card__save-button_type_inactive'
  }`;

  return (
    <li className='card'>
      <div className='card__wrapper'>
        <h3 className='card__title'>{movie.nameRU}</h3>
        <p className='card__text'>{movie.duration} минут</p>
      </div>   
      <a className='card__link' href={movie.trailerLink} target='_blank' rel="noreferrer">
        <img className='card__image' alt='Постер' src={(movie.image.url) ? 'https://api.nomoreparties.co' + movie.image.url : movie.image}/>
      </a>
      <button
        type='button'
        className={movieLikeButtonClassName}
        onClick={handleLikeClick}
      ></button>
    </li>
  );
}

export default MoviesCard;