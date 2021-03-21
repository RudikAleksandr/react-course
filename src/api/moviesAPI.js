
import axios from "./api";

const getListMovies = (params) => axios.get('/movies', { params }).then(({ data }) => data);

const updateMovie = (movie) => axios.put('/movies', movie).then(({ data }) => data);

const createMovie = (movie) => axios.post('/movies', movie).then(({ data }) => data);

const deleteMovie = (id) => axios.delete(`/movies/${id}`).then(({ data }) => data);

export {
  getListMovies,
  updateMovie,
  createMovie,
  deleteMovie
};