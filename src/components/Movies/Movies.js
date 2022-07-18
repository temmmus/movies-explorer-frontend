import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import UploadButton from '../UploadButton/UploadButton';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <div className="movies">
      <Header loggedIn={true}/>
      <SearchForm/>
      <MoviesCardList/>
      <UploadButton/>
      <Footer/>
    </div>
  );
}

export default Movies;