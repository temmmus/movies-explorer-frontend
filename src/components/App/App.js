import React, { useState, useEffect } from 'react';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NavModal from '../NavModal/NavModal';
import NotFound from '../NotFound/NotFound';
import {useNavigate , Routes, Route } from 'react-router-dom';
import * as api from '../../utils/api.js';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          navigate('/movies');
        })
        .catch(() => {
          localStorage.removeItem('token');
        });

      api
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });

      api
        .getMovies()
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => {
          console.log(err);
        });
      }
  }, []);

  // useEffect(() => {
  //   api
  //     .getUserInfo()
  //     .then((res) => {
  //       setCurrentUser(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   api
  //     .getMovies()
  //     .then((res) => {
  //       setMovies(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  function onRegister({ formValues }) {
    api.register(formValues.name, formValues.email, formValues.password).then((res) => {
      if (res.message) {
        console.log(res.message)
      } else {
        localStorage.setItem('token', `Bearer ${res.token}`);
        navigate('/movies');
      } 
    });
  }

  function onLogin({ formValues }) {
    api.login(formValues.email, formValues.password).then((res) => {
      if (res.message) {
        console.log(res.message)
      } else {
        localStorage.setItem('token', `Bearer ${res.token}`);
        navigate('/movies');
      } 
    });
  }

  function onLogOut() {
    setLoggedIn(false);
    localStorage.removeItem('token');
  }

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
        <Route path='/signup' element={<Register onRegister={ onRegister }/>} />
        <Route path='/signin' element={<Login onLogin={ onLogin }/>} />
        <Route element={<ProtectedRoute loggedIn={ loggedIn } />}>
          <Route path="/profile" element={<Profile user= { currentUser } onLogOut={ onLogOut } />} />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
        </Route> 
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <NavModal />
    </div>
  );
}

export default App;
