
import { render, } from '@testing-library/react';
import MovieCard from './MovieCard';
import { MemoryRouter, Route } from 'react-router';

const getComponent = (props) => (
  <MemoryRouter>
    <Route>
      <MovieCard {...props} />
    </Route>
  </MemoryRouter>
);

describe('MovieCard component', () => {
  test('render MovieCard snapshot', () => {
    const movie = {
      id: 'id',
      poster_path: '',
      title: 'title',
      release_date: new Date(2017, 1, 14),
      genres: []
    };
    const component = getComponent({ movie, onSelectOption: jest.fn() });
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });
});
