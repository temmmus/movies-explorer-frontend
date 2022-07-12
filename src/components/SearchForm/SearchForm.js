import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search">
        <form className='search__form'>
            <input type='search' name='search' className='search__input' placeholder='Фильм'/>
            <button type='submit' className='search__button'/>

            <span>Короткоментражки</span>
            <FilterCheckbox/>
        </form>
    </div>
  );
}

export default SearchForm;