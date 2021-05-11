import { configureStore as configureStoreToolkit } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import moviesReducer from './moviesSlice';

const configureStore = (preloadedState) => (
  configureStoreToolkit({
    preloadedState,
    reducer: {
      movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
  })
);

export default configureStore;
