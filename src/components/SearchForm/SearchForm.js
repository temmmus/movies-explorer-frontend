import React, { useState, useEffect } from 'react';
import './SearchForm.css';

function SearchForm({ findMovies }) {
  const [params, setParams] = useState({
    text: localStorage.getItem('text') || '',
    filter: JSON.parse(localStorage.getItem('filter')) || false,
  });

  useEffect(() => {
    localStorage.setItem('text', params.text);
    localStorage.setItem('filter', params.filter);
  }, [params.text, params.filter]);

  useEffect(() => {
    handleSubmit({ params });
  }, [params.filter]);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = name === 'text' ? target.value : target.checked;

    setParams({ ...params, [name]: value });
  };

  const handleSubmit = () => {
    findMovies({ params });
  };

  window.onload = () => {
    document.querySelector('.search__input').focus();
  };

  return (
    <div className='search'>
      <form className='search__form' name='search' onSubmit={handleSubmit}>
        <label className='search__label'>
          <input
            type='search'
            name='text'
            className='search__input'
            placeholder='Фильм'
            value={params.text || ''}
            onChange={handleChange}
            minLength='1'
            maxLength='30'
            required
          />
          <button
            type='submit'
            className='search__button'
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Найти
          </button>
        </label>
        <div className='search__wrapper'>
          <label className='search__toggle'>
            <input
              type='checkbox'
              name='filter'
              className='search__toggle-input'
              checked={params.filter}
              onChange={handleChange}
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
