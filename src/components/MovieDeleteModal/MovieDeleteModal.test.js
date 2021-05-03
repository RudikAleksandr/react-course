
import { render } from '@testing-library/react';
import MovieDeleteModal from './MovieDeleteModal';

describe('MovieDeleteModal component', () => {
  test('render MovieDeleteModal snapshot', () => {
    const component = <MovieDeleteModal onHide={jest.fn()} onConfirm={jest.fn()} />
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });
});