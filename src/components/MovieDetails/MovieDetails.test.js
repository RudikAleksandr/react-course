
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import MovieDetails from './MovieDetails';
import * as reactRedux from 'react-redux';
import * as React from 'react';
import configureStore from 'redux-mock-store'
import { initialState } from '../../redux/moviesSlice';
import thunk from 'redux-thunk'

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
