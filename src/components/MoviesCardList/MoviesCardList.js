import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
      <ul className="card-list">
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>

        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>

        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>

        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </ul>
  );
}

export default MoviesCardList;