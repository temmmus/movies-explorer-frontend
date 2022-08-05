import React, { useState, useEffect } from 'react';
import * as mainApi from '../../utils/MainApi.js';
import './MoviesSaved.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function MoviesSaved() {

  const [savedMovies, setMoviesSaved] = useState([]);

  useEffect(() => {
    mainApi
      .getMoviesSaved()
      .then((res) => {
        setMoviesSaved(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function movieLike(movie) {
      mainApi.deleteMovie(movie)
        .then((deletedMovie) => {
          setMoviesSaved((state) => state.filter((c) => c._id !== deletedMovie))          
        })
        .catch((err) => {
          console.log(err);
        });
  }

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <main className="movies-saved">
        <SearchForm/>
        <MoviesCardList movies={savedMovies} movieLike={movieLike}/>
          {(savedMovies.length === 0) ? <p className="movies-saved__result-message">Здесь пока ничего нет</p> : null}
      </main>
      <Footer/>
    </div>
  );
}

export default MoviesSaved;