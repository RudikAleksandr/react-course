import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import * as reactRedux from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../../redux/moviesSlice';
import MovieDetails from './MovieDetails';

const getComponent = (store) => (
  <MemoryRouter>
    <Route>
      <reactRedux.Provider store={store}>
        <MovieDetails />
      </reactRedux.Provider>
    </Route>
  </MemoryRouter>
);

describe('MovieDetails component', () => {
  test('render MovieDetails snapshot', () => {
    const store = configureStore([thunk])({ movies: initialState });
    const component = getComponent(store);
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });

  test('should check movie in document', async () => {
    const store = configureStore([thunk])({ movies: initialState });
    const component = getComponent(store);
    const movie = { release_date: new Date(), overview: 'overview' };
    const mockDispatch = jest.fn(() => Promise.resolve({ payload: movie }));

    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

    render(component);

    expect(await screen.findByText(movie.overview)).toBeInTheDocument();
  });
});
