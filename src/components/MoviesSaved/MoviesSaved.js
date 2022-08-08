import React, { useState } from 'react';
import * as mainApi from '../../utils/MainApi.js';
import './MoviesSaved.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

function MoviesSaved({ movies }) {
  const [searchResult, setSearchResult] = useState(movies);
  const [loading, setLoading] = useState(false);

  function findMovies({ params }) {
    setLoading(true);

    setSearchResult([]);

    setTimeout(() => {
      if (params.filter) {
        setSearchResult(
          movies.filter(
            (movie) =>
              movie.duration < 40 &&
              movie.nameRU.toUpperCase().includes(params.text.toUpperCase())
          )
        );
        setLoading(false);
      } else {
        setSearchResult(
          movies.filter((movie) =>
            movie.nameRU.toUpperCase().includes(params.text.toUpperCase())
          )
        );
        setLoading(false);
      }
    }, 1000);
  }

  function movieLike(movie) {
    mainApi
      .deleteMovie(movie)
      .then((deletedMovie) => {
        setSearchResult((state) => state.filter((c) => c.id !== deletedMovie));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='page'>
      <Header loggedIn={true} />
      <main className='movies-saved'>
        <SearchForm findMovies={findMovies} />
        <MoviesCardList movies={searchResult} movieLike={movieLike} />
        {loading === true ? <Loader /> : null}
        {searchResult.length === 0 && loading === false ? (
          <p className='movies-saved__result-message'>Здесь пока ничего нет</p>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

export default MoviesSaved;
