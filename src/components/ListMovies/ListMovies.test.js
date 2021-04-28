
import { render } from '@testing-library/react';
import ListMovies from './ListMovies';
import configureStore from 'redux-mock-store'
import { MemoryRouter, Route } from 'react-router';
import { getListMovies } from '../../redux/moviesSlice';
import * as reactRedux from 'react-redux';
import * as React from 'react';

jest.mock('../../redux/moviesSlice');
jest.mock('../../redux/moviesSelectors', () => ({
  selectListMovies: () => []
}));

const getComponent = (store, props) => (
  <MemoryRouter>
    <Route>
      <reactRedux.Provider store={store}>
        <ListMovies {...props} />
      </reactRedux.Provider>
    </Route>
  </MemoryRouter>
);

describe('ListMovies component', () => {
  test('render ListMovies snapshot', () => {
    const store = configureStore()();
    const component = getComponent(store);
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });

  test('should call getListMovies on change prop', () => {
    const store = configureStore()();
    const props = {
      search: 'search', genre: 'genre', sortBy: 'sortBy'
    };
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(jest.fn());

    const { rerender } = render(getComponent(store));
    rerender(getComponent(store, props));

    expect(getListMovies).toHaveBeenCalledWith({
      search: props.search,
      sortBy: props.sortBy,
      sortOrder: 'desc',
      searchBy: 'title',
      filter: props.genre,
    });

    rerender(getComponent(store, { ...props, genre: 'all' }));

    expect(getListMovies).toHaveBeenCalledWith({
      search: props.search,
      sortBy: props.sortBy,
      sortOrder: 'desc',
      searchBy: 'title',
      filter: '',
    });

  });

  // test('should call setSelectedOption', () => {
  //   const movie = { id: 'id1', genres: [] };
  //   const store = configureStore()();
  //   const mockSetSelectedOption = jest.fn();

  //   jest.spyOn(reactRedux, 'useSelector').mockReturnValue([movie]);
  //   jest.spyOn(React, 'useState').mockReturnValue(([{}, mockSetSelectedOption]));
  //   const { getByTestId } = render(getComponent(store));

  //   userEvent.click(getByTestId('selectOption'), 'EDIT');

  //   expect(mockSetSelectedOption).toHaveBeenCalledWith({ movie, type: 'EDIT' });

  // });
});