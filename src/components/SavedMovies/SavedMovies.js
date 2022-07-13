import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  return (
    <ul className="card-list">
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
    </ul>
  );
}

export default SavedMovies;