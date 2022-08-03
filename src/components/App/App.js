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
import * as mainApi from '../../utils/MainApi.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkCurrentUser();
      checkToken(token);
    }

  // window.onload = () => {
  //   const burgerButton = document.querySelector(".header__burger-menu");
  //   const closeButton = document.querySelector(".navmodal__close-button");
  //   const navModal = document.querySelector(".navmodal");
    
  //   burgerButton.addEventListener("click", () => {
  //       navModal.classList.add('navmodal_opened')
  //     });

  //   closeButton.addEventListener("click", () => {
  //       navModal.classList.remove('navmodal_opened')
  //     });
  // }
  }, []);

  function checkToken(token) {
    mainApi
      .checkToken(token)
      .then(() => {
        setLoggedIn(true);
      })
      .catch(() => {
        localStorage.removeItem('token');
      });
  }

  function checkCurrentUser() {
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onRegister({ values }) {
    mainApi.register(values.name, values.email, values.password).then((res) => {
      if (res.message) {
        console.log(res.message)
      } else {
        localStorage.setItem('token', `Bearer ${res.token}`);
        setLoggedIn(true);
        checkCurrentUser();
        navigate('/movies');
      }
    });
  }

  function onLogin({ values }) {
    mainApi.login(values.email, values.password).then((res) => {
      if (res.message) {
        console.log(res.message)
      } else {
        localStorage.setItem('token', `Bearer ${res.token}`);
        setLoggedIn(true);
        checkCurrentUser();
        navigate('/movies');
      }
    });
  }

  function onLogOut() {
    setLoggedIn(false);
    localStorage.removeItem('token');
  }

  function handleUpdateUser(name, about) {
    mainApi
      .patchUserInfo(name, about)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/signup' element={<Register onRegister={onRegister}/>} />
          <Route path='/signin' element={<Login onLogin={onLogin}/>} />
          <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route path="/profile" element={<Profile user={currentUser} onLogOut={onLogOut} onUpdateUser={handleUpdateUser} />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
          </Route> 
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <NavModal />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
