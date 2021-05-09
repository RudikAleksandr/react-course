import { configureStore as configureStoreToolkit } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import thunkMiddleware from 'redux-thunk'

const configureStore = (preloadedState) => (
  configureStoreToolkit({
    preloadedState,
    reducer: {
      movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
  })
)

export default configureStore;