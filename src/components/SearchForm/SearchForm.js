import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ filterMovies }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchFilter, setSearchFilter] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    filterMovies(searchValue, searchFilter);
  }

  window.onload = () => {  
    document.querySelector(".search__input").focus();
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
              minLength='1'
              maxLength='30'
              required
            />
            <button type='submit' className='search__button'>Найти</button>
          </label>
          <div className='search__wrapper'>
            <label className='search__toggle'>         
              <input
                type='checkbox'
                name='toggle'
                className='search__toggle-input'
                onClick={(e) => setSearchFilter(e.target.checked)}
              />
              <span className='search__toggle-slider'></span>
            </label>
            <span className='search__filter-name'>Короткометражки</span>
          </div>
        </form>
    </div>
  );
}

export default SearchForm;