import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('Label component', () => {
  test('render Label snapshot', () => {
    const { asFragment } = render(<Label />);

    expect(asFragment(<Label />)).toMatchSnapshot();
  });
});
