import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className='toggle'>         
        <input type='checkbox' name='toggle' className='toggle__input'/>
        <span className='toggle__slider'></span>
    </label>
  );
}

export default FilterCheckbox;