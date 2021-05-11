import axios from './api';

const getListMovies = (params) => axios.get('/movies', { params }).then(({ data }) => data);

const getMovie = (id) => axios.get(`/movies/${id}`).then(({ data }) => data);

const updateMovie = (movie) => axios.put('/movies', movie).then(({ data }) => data);

const createMovie = (movie) => axios.post('/movies', movie).then(({ data }) => data);

const deleteMovie = (id) => axios.delete(`/movies/${id}`).then(({ data }) => data);

export {
  getListMovies,
  getMovie,
  updateMovie,
  createMovie,
  deleteMovie,
};
