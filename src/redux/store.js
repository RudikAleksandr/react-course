import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import thunkMiddleware from 'redux-thunk'

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

export default store;