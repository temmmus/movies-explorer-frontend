import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ movies, movieLike }) {

  var count;
  if (window.innerWidth > 780) {
    count = 12;
  } else if (window.innerWidth < 780 && window.innerWidth > 460 ) {
    count = 8;
  } else {
    count = 5;
  }

  const [index, setIndex] = useState(count);
  const moviesToRender = movies.slice(0, index);

  function handleMovieLike(movie) {
    movieLike(movie);
  }


  return (
    <>
      <ul className="card-list">
        {moviesToRender.map((movie) => (  
          <MoviesCard
            key={(movie.id) ? movie.id : movie._id}
            movie={movie}
            onMovieLike={handleMovieLike}
          />
        ))}
      </ul>

      {
        (movies.length > count && index < movies.length)
        ? <button type='button' className='card-list__upload-button' onClick={() => setIndex(index + count)}>Еще</button>
        : null 
      }
    </>

  );
}

export default MoviesCardList;