
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import PageNotFound from './PageNotFound';

const component = (
  <MemoryRouter>
    <Route>
      <PageNotFound />
    </Route>
  </MemoryRouter>
);

describe('PageNotFound component', () => {
  test('render PageNotFound snapshot', () => {
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });
});