import React, { useState, useEffect, useCallback } from 'react';
import * as moviesApi from '../../utils/MoviesApi.js';
import * as mainApi from '../../utils/MainApi.js';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import UploadButton from '../UploadButton/UploadButton';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

function Movies() {
  const [beatfilmMovies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false)

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

  function filterMovies(searchValue, searchFilter) 
  {
    setLoading(true);
    var result = [];
  
    if (searchFilter) {
      result = beatfilmMovies.filter(movie => movie.duration < 40 && movie.nameRU.toUpperCase().includes(searchValue.toUpperCase()))
    } else {
      result = beatfilmMovies.filter(movie => movie.nameRU.toUpperCase().includes(searchValue.toUpperCase()));
    }
    
    setTimeout(() => setFilteredMovies(result), 2000);
    setLoading(false);
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
        <SearchForm filterMovies={filterMovies}/>
        <MoviesCardList movies={filteredMovies} movieLike={movieLike}/>
        {(loading === true) ? <Loader /> : null}
        {(filteredMovies.length === 0 && loading === false) ? <p className="movies__result-message">Ничего не найдено</p> : null}
        {(filteredMovies.length > 6) && <UploadButton/>}     
      </main>
      <Footer/>
    </div>
  );
}

export default Movies;