import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className='search__toggle'>         
        <input type='checkbox' name='toggle'/>
        <span className="search__slider"></span>
    </label>
  );
}

export default FilterCheckbox;