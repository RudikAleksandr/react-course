
import { render } from '@testing-library/react';
import SortMovies from './SortMovies';

describe('SortMovies component', () => {
  test('render SortMovies snapshot', () => {
    const component = <SortMovies activeType="vote_average" onSelectSortType={() => { }} />;
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });
});