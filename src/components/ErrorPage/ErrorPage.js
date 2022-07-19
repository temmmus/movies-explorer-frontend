import './ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className='error'>
            <h2 className='error__title'>404</h2>
            <p className='error__discription'>Страница не найдена</p>
            <Link className='error__link' to='/'>Назад</Link>
        </div>
    );
  }
  
  export default ErrorPage;