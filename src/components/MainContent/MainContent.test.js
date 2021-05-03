
import { render, } from '@testing-library/react';
import MainContent from './MainContent';
import * as reactRedux from 'react-redux';
import * as React from 'react';
import configureStore from 'redux-mock-store'
import { initialState } from '../../redux/moviesSlice';
import thunk from 'redux-thunk'

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
