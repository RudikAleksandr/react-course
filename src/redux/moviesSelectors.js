
const selectListMovies = (state) => state.movies.moviesOrder.map(id => state.movies.movies[id]);

const selectDetailsMovie = (state) => state.movies.movies[state.movies.detailsMovieId];

const selectSearch = (state) => state.movies.search;

const selectActiveMovieGenre = (state) => state.movies.activeMovieGenre;

const selectActiveSortType = (state) => state.movies.activeSortType;

export {
  selectListMovies,
  selectDetailsMovie,
  selectSearch,
  selectActiveMovieGenre,
  selectActiveSortType
};