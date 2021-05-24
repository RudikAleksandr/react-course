import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterMovies from './FilterMovies';

describe('FilterMovies component', () => {
  test('render FilterMovies snapshot', () => {
    const component = <FilterMovies activeType="all" onClickMovieGenre={() => { }} />;
    const { asFragment } = render(component);

    expect(asFragment(component)).toMatchSnapshot();
  });

  test('should change genre type', () => {
    const mockClickMovieGenre = jest.fn();
    const movieGenre = 'documentary';
    const component = <FilterMovies onClickMovieGenre={mockClickMovieGenre} />;

    render(component);

    userEvent.click(screen.getByText(movieGenre), movieGenre);
    expect(mockClickMovieGenre).toHaveBeenCalledWith(movieGenre);
  });
});
