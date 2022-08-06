import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import './MoviesCard.css';

function MoviesCard({ movie, onMovieLike }) {

  const currentUser = React.useContext(CurrentUserContext);


  const movieLikeButtonClassName = `card__save-button ${
    movie.owner === currentUser._id ? 'card__save-button_type_cancel' : 'card__save-button_type_inactive'
  }`;

  const duration = (duration) => {
    if (duration < 60) {
      return duration + ' минут';
    } else {
      return Math.floor(duration/60) + 'ч' + ' ' + duration%60 + 'м'
    }
  };

  
  function handleLikeClick() {
    onMovieLike(movie);
  }

  return (
    <li className='card'>
      <div className='card__wrapper'>
        <h3 className='card__title'>{movie.nameRU}</h3>
        <p className='card__text'>{duration(movie.duration)}</p>
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