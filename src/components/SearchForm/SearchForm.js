import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ filterMovies }) {
  const [searchValue, setSearchValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    filterMovies(searchValue);
  }

  return (
    <div className="search">
        <form className='search__form' onSubmit={handleSubmit}>
          <label  className='search__label'>
            <input 
              type='search'
              name='search'
              className='search__input'
              placeholder='Фильм'
              onChange={(e) => setSearchValue(e.target.value)}
              minLength='2'
              maxLength='30'
              required/>
            <button type='submit' className='search__button'>Найти</button>
          </label>
          <div className='search__wrapper'>
            <FilterCheckbox/>
            <span className='search__filter-name'>Короткометражки</span>
          </div>
        </form>
    </div>
  );
}

export default SearchForm;