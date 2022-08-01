import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, movieLike}) {

  function handleMovieLike(movie) {
    movieLike(movie);
  }

  return (
      <ul className="card-list" >
        {movies.map((movie) => (
          <MoviesCard
            key={(movie.id) ? movie.id : movie._id}
            movie={movie}
            onMovieLike={handleMovieLike}
          />
        ))}
      </ul>
  );
}

export default MoviesCardList;