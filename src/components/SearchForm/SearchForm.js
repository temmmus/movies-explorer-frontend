import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search">
        <form className='search__form'>
          <label  className='search__label'>
            <input type='search' name='search' className='search__input' placeholder='Фильм'/>
            <button type='submit' className='search__button'/>
          </label>
          <div  className='search__wrapper'>
            <span className='search__filter-name'>Короткометражки</span>
            <FilterCheckbox/>
          </div>
        </form>
    </div>
  );
}

export default SearchForm;