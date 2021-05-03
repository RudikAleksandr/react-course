
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialState } from '../../redux/moviesSlice';

const getComponent = (store) => (
  <MemoryRouter>
    <Route>
      <Provider store={store}>
        <App />
      </Provider>
    </Route>
  </MemoryRouter>
);

describe('App component', () => {
  test('render App snapshot', () => {
    const store = configureStore()({ movies: initialState });
    const component = getComponent(store);
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });
});