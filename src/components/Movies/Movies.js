import React, { useState, useEffect, useCallback } from 'react';
import * as mainApi from '../../utils/MainApi.js';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

function Movies({ movies }) {
  // const [movies, setMovies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false)
  // const [searchParams, setSearchParams] = useState({});

  // useEffect(() => {
  //   setSearchParams({
  //     text: localStorage.getItem('searchValue'),
  //     filter: localStorage.getItem('toggle')
  //   });
  // }, []);

  function findMovies(params) 
  {
    console.log(params.searchFilter)

    setLoading(true);

    if (params.searchFilter) {
      setSearchResult(movies.filter(movie => movie.duration < 40 && movie.nameRU.toUpperCase().includes(params.searchText.toUpperCase())));
    } else {
      setSearchResult(movies.filter(movie => movie.nameRU.toUpperCase().includes(params.searchText.toUpperCase())));
    }
    
    // setTimeout(() => setSearchResult(searchFilter), 2000);
    setLoading(false);
  }

  function movieLike(movie) {
      mainApi.createMovie(movie)
          .then((savedMovie) => {
            // setMoviesSaved((state) => state.filter((c) => c._id !== deletedMovie))   
            setSearchResult((state) => state.map((c) => (c.id === movie._id ? savedMovie : c)))
            // setSearchResult((state) => console.log(state))
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