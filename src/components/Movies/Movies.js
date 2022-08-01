import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import * as moviesApi from '../../utils/MoviesApi.js';
import * as mainApi from '../../utils/MainApi.js';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import UploadButton from '../UploadButton/UploadButton';
import Footer from '../Footer/Footer';

function Movies() {
  const currentUser = React.useContext(CurrentUserContext);

  const [beatfilmMovies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  function filterMovies(searchValue, searchFilter) {
    var result = [];
  
    if (searchFilter) {
      result = beatfilmMovies.filter(movie => movie.duration < 40 && movie.nameRU.toUpperCase().includes(searchValue.toUpperCase()))
    } else {
      result = beatfilmMovies.filter(movie => movie.nameRU.toUpperCase().includes(searchValue.toUpperCase()));
    }

    setFilteredMovies(result);
  }

  function movieLike(movie) {
      mainApi.createMovie(movie)
          .then((savedMovie) => {
            // setSavedMovies((state) => state.map((c) => (c._id === movie._id ? updatedCard : c)))
          })
          .catch((err) => {
            console.log(err);
          });
  }

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <main className="movies">
        <SearchForm filterMovies={filterMovies} />
        <MoviesCardList movies={filteredMovies} movieLike={movieLike}/>
        <p>Ничего не найдено</p>
        <UploadButton/>
      </main>
      <Footer/>
    </div>
  );
}

export default Movies;