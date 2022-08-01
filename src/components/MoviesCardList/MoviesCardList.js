import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies}) {
  return (
      <ul className="card-list">
            {movies.map((movie) => (
              <MoviesCard
                key={movie._id}
                movie={movie}
              />
            ))}
      </ul>
  );
}

export default MoviesCardList;