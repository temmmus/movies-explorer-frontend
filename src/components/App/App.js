import './App.css';
import Main from '../Main/Main';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* <Header loggedIn={false}/> */}
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/saved-movies' element={<SavedMovies/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
