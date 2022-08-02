import React, { useState, useEffect } from 'react';
import * as mainApi from '../../utils/MainApi.js';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {

  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function movieLike(movie) {
      mainApi.deleteMovie(movie)
        .then((deletedMovie) => {
          setSavedMovies((state) => state.filter((c) => c._id !== deletedMovie._id))          
        })
        .catch((err) => {
          console.log(err);
        });
  }

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <main className="saved-movies">
        <SearchForm/>
        <MoviesCardList movies={savedMovies} movieLike={movieLike}/>
          {(savedMovies.length === 0) ? <p className="saved-movies__result-message">Здесь пока ничего нет</p> : null}
      </main>
      <Footer/>
    </div>
  );
}

export default SavedMovies;