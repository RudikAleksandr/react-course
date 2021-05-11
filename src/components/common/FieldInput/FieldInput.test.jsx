import React from 'react';
import { render } from '@testing-library/react';
import FieldInput from './FieldInput';

describe('FieldInput component', () => {
  test('render FieldInput snapshot', () => {
    const component = <FieldInput label="label" />;
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });
});
