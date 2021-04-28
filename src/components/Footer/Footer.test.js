
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('render Footer snapshot', () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment(<Footer />)).toMatchSnapshot();
  });
});