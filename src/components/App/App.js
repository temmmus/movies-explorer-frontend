import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import MoviesSaved from '../MoviesSaved/MoviesSaved';
import NavModal from '../NavModal/NavModal';
import NotFound from '../NotFound/NotFound';
import { useNavigate, Routes, Route } from 'react-router-dom';
import * as moviesApi from '../../utils/MoviesApi.js';
import * as mainApi from '../../utils/MainApi.js';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [beatfilmMovies, setBeatfilmMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken(token);
      checkCurrentUser();
      getMovies();
      getSavedMovies();
    }
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

  function getMovies() {
    moviesApi
      .getMovies()
      .then((res) => {
        setBeatfilmMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getSavedMovies() {
    mainApi
      .getMoviesSaved()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister({ values }) {
    return mainApi
      .register(values.name, values.email, values.password)
      .then((res) => {
        if (res.message) {
          return res.message;
        } else {
          localStorage.setItem('token', `Bearer ${res.token}`);
          setLoggedIn(true);
          checkCurrentUser();
          navigate('/movies');
          getMovies();
          getSavedMovies();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin({ values }) {
    return mainApi
      .login(values.email, values.password)
      .then((res) => {
        if (res.message) {
          return res.message;
        } else {
          localStorage.setItem('token', `Bearer ${res.token}`);
          setLoggedIn(true);
          checkCurrentUser();
          navigate('/movies');
          getMovies();
          getSavedMovies();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogOut() {
    setLoggedIn(false);
    localStorage.clear();
  }

  function handleUpdateUser({ values }) {
    return mainApi
      .patchUserInfo(values.name, values.email)
      .then((res) => {
        if (!res.message) {
          setCurrentUser(res);
        }
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />} />
          <Route
            path='/signup'
            element={<Register onRegister={handleRegister} />}
          />
          <Route path='/signin' element={<Login onLogin={handleLogin} />} />

          <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              element={
                <Profile
                  onLogOut={handleLogOut}
                  onUpdateUser={handleUpdateUser}
                />
              }
              path='/profile'
              exact
            />
          </Route>
          <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              element={<Movies movies={beatfilmMovies} />}
              path='/movies'
              exact
            />
          </Route>
          <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              element={<MoviesSaved movies={savedMovies} />}
              path='/movies-saved'
              exact
            />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavModal />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
