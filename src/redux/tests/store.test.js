import store from '../store';

describe('redux store', () => {
  test('should check initial store', () => {
    expect(store.getState()).toEqual({
      movies: {
        movies: {},
        moviesOrder: [],
        search: '',
        activeMovieGenre: '',
        activeSortType: 'release_date'
      }
    });
  });
})