import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as moviesAPI from '../api/moviesAPI';
import { groupByKey } from '../utils/grouping';

const initialState = {
  movies: {},
  moviesOrder: [],
  detailsMovieId: '',
  search: '',
  activeMovieGenre: '',
  activeSortType: 'release_date'
};

export const getListMovies = createAsyncThunk(
  'movies/getListMovies',
  moviesAPI.getListMovies

);

export const updateMovie = createAsyncThunk(
  'movies/updateMovie',
  moviesAPI.updateMovie
);

export const createMovie = createAsyncThunk(
  'movies/createMovie',
  moviesAPI.createMovie
);

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  moviesAPI.deleteMovie
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setDetailsMovieId: (state, { payload }) => {
      state.detailsMovieId = payload;
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setActiveMovieGenre: (state, { payload }) => {
      state.activeMovieGenre = payload;
    },
    setActiveSortType: (state, { payload }) => {
      state.activeSortType = payload;
    }
  },
  extraReducers: {
    [getListMovies.fulfilled]: (state, { payload }) => {
      state.movies = groupByKey('id', payload.data);
      state.moviesOrder = payload.data.map((movie) => movie.id);
    },
    [updateMovie.fulfilled]: (state, { payload }) => {
      state.movies[payload.id] = payload;
    },
  },
});

export const {
  setDetailsMovieId,
  setSearch,
  setActiveMovieGenre,
  setActiveSortType
} = moviesSlice.actions;

export default moviesSlice.reducer;