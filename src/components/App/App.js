import './App.css';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/saved-movies' />
        <Route path='/signin' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
