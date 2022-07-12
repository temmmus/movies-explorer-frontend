import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
      <ul  className="cards">
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