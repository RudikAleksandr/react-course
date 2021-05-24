import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import { initialState } from '../../redux/moviesSlice';

const getComponent = (store) => (
  <MemoryRouter>
    <Route>
      <Provider store={store}>
        <Header />
      </Provider>
    </Route>
  </MemoryRouter>
);

describe('Header component', () => {
  test('render Header snapshot', () => {
    const store = configureStore()({ movies: initialState });
    const component = getComponent(store);
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });

  test('should open create movie modal', async () => {
    const store = configureStore()({ movies: initialState });
    const component = getComponent(store);

    const { findByTestId, getByText, queryByTestId } = render(component);

    expect(queryByTestId('movieFormModal')).not.toBeInTheDocument();

    userEvent.click(getByText('+ Add movie'), null);

    expect(await findByTestId('movieFormModal')).toBeInTheDocument();
  });
});
