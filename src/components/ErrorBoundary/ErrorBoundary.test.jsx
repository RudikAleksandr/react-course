import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary component', () => {
  test('render ErrorBoundary snapshot', () => {
    const { asFragment } = render(<ErrorBoundary>App</ErrorBoundary>);

    expect(asFragment(<ErrorBoundary />)).toMatchSnapshot();
  });

  test('should render ErrorBoundary when there is an error', () => {
    const Child = () => {
      throw new Error();
    };

    const { getByText } = render(<ErrorBoundary><Child /></ErrorBoundary>);
    const errorMessage = getByText('Something went wrong!');
    expect(errorMessage).toBeDefined();
  });
});
