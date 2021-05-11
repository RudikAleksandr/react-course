import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../redux/moviesSlice';

import MovieFormModal from './MovieFormModal';

jest.mock('../../redux/moviesSlice');

const getComponent = (store, props) => (
  <MemoryRouter>
    <Route>
      <Provider store={store}>
        <MovieFormModal movie={props.movie} onHide={props.onHide} />
      </Provider>
    </Route>
  </MemoryRouter>
);

const movie = {
  id: 'id',
  poster_path: '',
  title: 'title',
  release_date: new Date(2017, 1, 14),
  genres: [],
};

describe('MovieFormModal component', () => {
  test('render MovieFormModal snapshot', () => {
    const store = configureStore()({ movies: initialState });
    const component = getComponent(store, { movie, onHide: jest.fn() });
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });

  // test('should call updateMovie', async () => {
  //   const store = configureStore()({ movies: initialState });
  //   jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(jest.fn());

  //   const { getByRole } = render(getComponent(store, { movie, onHide: jest.fn() }));

  //   userEvent.click(getByRole('button', { name: /Save/i }));

  //   //     rerender(getComponent(store, { ...props, genre: 'all' }));

  //   expect(updateMovie).toHaveBeenCalled();

  //   await waitFor(() =>
  //     expect(updateMovie).toHaveBeenCalled()
  //   )
  // });
});
