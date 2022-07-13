import './Logo.css';
import image from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/'>
      <img src={image} alt="Лого" className="logo"/>
    </Link> 
  );
}

export default Logo;
 