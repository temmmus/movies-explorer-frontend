import React, { useState, useEffect } from 'react';
import * as moviesApi from '../../utils/MoviesApi.js';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import UploadButton from '../UploadButton/UploadButton';
import Footer from '../Footer/Footer';

function Movies() {
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

  function filterMovies(searchValue) {
    var result = [];

    beatfilmMovies.filter((movie) => {
      if (movie.nameRU.includes(searchValue)) {
        result.push(movie);
      }
      setFilteredMovies(result)
    })
  }

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <main className="movies">
        <SearchForm filterMovies={filterMovies} />
        <MoviesCardList movies={filteredMovies}/>
        <UploadButton/>
      </main>
      <Footer/>
    </div>
  );
}

export default Movies;