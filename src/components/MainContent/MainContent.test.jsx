import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import * as React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../../redux/moviesSlice';
import MainContent from './MainContent';

const getComponent = (store) => (
  <reactRedux.Provider store={store}>
    <MainContent />
  </reactRedux.Provider>
);

describe('MainContent component', () => {
  test('render MainContent snapshot', () => {
    const store = configureStore([thunk])({ movies: initialState });
    const component = getComponent(store);
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });
});
