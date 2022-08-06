const BASE_URL = 'https://api.nomoreparties.co';

export const getMovies = () => {
    return fetch(`${BASE_URL}/beatfilm-movies`, {
      method: 'GET'
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  };