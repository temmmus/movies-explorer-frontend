import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ movies }) {
  return (
    <div className="page">
      <Header loggedIn={true}/>
      <main className="saved-movies">
        <SearchForm/>
        <MoviesCardList movies={movies}/> 
      </main>
      <Footer/>
    </div>
  );
}

export default SavedMovies;