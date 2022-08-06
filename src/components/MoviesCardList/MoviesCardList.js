import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, movieLike }) {

  function handleMovieLike(movie) {
    movieLike(movie);
  }

  const [index, setIndex] = useState(12);
  const moviesToRender = movies.slice(0, index);

  return (
    <>
      <ul className="card-list" >
        {moviesToRender.map((movie, index) => (  
          <MoviesCard
            key={(movie.id) ? movie.id : movie._id}
            movie={movie}
            onMovieLike={handleMovieLike}
          />
        ))}
      </ul>
      {(movies.length > 12 && index < movies.length) ? <button type='button' className='card-list__upload-button' onClick={() => setIndex(index + 12)}>Еще</button> : null }  
    </>

  );
}

export default MoviesCardList;