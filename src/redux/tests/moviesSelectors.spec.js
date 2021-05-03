import * as moviesSelectors from '../moviesSelectors';

const state = {
  movies: {
    movies: { id1: { id: 'id1' }, id2: { id: 'id2' } },
    moviesOrder: ['id1', 'id2'],
    search: 'search',
    activeMovieGenre: 'genre',
    activeSortType: 'release_date'
  }
};

describe('movies selectors', () => {
  test('should select list movies', () => {
    expect(moviesSelectors.selectListMovies(state)).toEqual([
      { id: 'id1' }, { id: 'id2' }
    ]);
  });

  test('should select search', () => {
    expect(moviesSelectors.selectSearch(state)).toEqual(
      state.movies.search
    );
  });

  test('should select select active movie genre', () => {
    expect(moviesSelectors.selectActiveMovieGenre(state)).toEqual(
      state.movies.activeMovieGenre
    );
  });

  test('should select select active sort type', () => {
    expect(moviesSelectors.selectActiveSortType(state)).toEqual(
      state.movies.activeSortType
    );
  });
})