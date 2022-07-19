import './AccountButton.css';
import { Link } from 'react-router-dom';

function AccountButton() {
    return (
        <Link className='account-button' to='/profile'>
        <i className="account-button__icon"/>
        Аккаунт
      </Link>
    );
  }
  
  export default AccountButton;