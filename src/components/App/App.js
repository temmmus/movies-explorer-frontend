import './App.css';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NavModal from '../NavModal/NavModal';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  window.onload = () => {
    var burgerButton = document.querySelector(".header__burger-menu");
    var closeButton = document.querySelector(".navmodal__close-button");
    var navModal = document.querySelector(".navmodal");
    
    burgerButton.addEventListener("click", () => {
        navModal.classList.add('navmodal_opened')
      });

    closeButton.addEventListener("click", () => {
        navModal.classList.remove('navmodal_opened')
      });
  }


  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/saved-movies' element={<SavedMovies/>} />
        <Route path='/404' element={<ErrorPage/>} />
      </Routes>
      <NavModal />
    </div>
  );
}

export default App;
