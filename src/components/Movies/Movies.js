import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import UploadButton from '../UploadButton/UploadButton';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <div className="page">
      <Header loggedIn={true}/>
      <main className="movies">
        <SearchForm/>
        <MoviesCardList/>
        <UploadButton/>
      </main>
      <Footer/>
    </div>
  );
}

export default Movies;