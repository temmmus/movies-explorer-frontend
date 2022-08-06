import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ findMovies }) {
  const [searchText, setSearchValue] = useState(localStorage.getItem('searchText'));
  const [searchFilter, setSearchFilter] = useState(JSON.parse(localStorage.getItem('searchFilter')));

  function handleSubmit(e) {
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('searchFilter', searchFilter);

    e.preventDefault();
    findMovies({searchText, searchFilter});
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
              name='text'
              className='search__input'
              placeholder='Фильм'
              value={searchText || ''}
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
                name='filter'
                className='search__toggle-input'
                defaultChecked={searchFilter}
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