import React, { useState } from 'react';
import * as mainApi from '../../utils/MainApi.js';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

function Movies({ movies }) {
  const [searchResult, setSearchResult] = useState(JSON.parse(localStorage.getItem('searchResult')) || []);
  const [loading, setLoading] = useState(false)

  localStorage.setItem('searchResult',  JSON.stringify(searchResult))

  function findMovies(params) 
  {
    setLoading(true);

    setSearchResult([]);
    
    setTimeout(() => {
      if (params.searchFilter) {
        setSearchResult(movies.filter(movie => movie.duration < 40 && movie.nameRU.toUpperCase().includes(params.searchText.toUpperCase())));
        setLoading(false)
      } else {
        setSearchResult(movies.filter(movie => movie.nameRU.toUpperCase().includes(params.searchText.toUpperCase())));
        setLoading(false)
      }
    }, 1000);

  }

  function movieLike(movie) {
    mainApi.createMovie(movie)
        .then((savedMovie) => {
          setSearchResult((state) => state.map((c) => (c.id === movie._id ? savedMovie : c)))
        })
        .catch((err) => {
          console.log(err);
        });
  }


  return (
    <div className="page">
      <Header loggedIn={true}/>
      <main className="movies">
        <SearchForm findMovies={findMovies} />
        <MoviesCardList movies={searchResult} movieLike={movieLike}/>
        {(loading === true) ? <Loader /> : null}
        {(searchResult.length === 0 && loading === false) ? <p className="movies__result-message">Ничего не найдено</p> : null}
      </main>
      <Footer/>
    </div>
  );
}

export default Movies;