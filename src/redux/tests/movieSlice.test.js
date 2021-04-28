import * as moviesSlice from '../moviesSlice';

const reducer = moviesSlice.default;

describe('movies slice', () => {
  test('should create an action to set a search', () => {
    const payload = 'search'
    const expectedAction = {
      payload,
      type: moviesSlice.setSearch.type,
    };

    expect(moviesSlice.setSearch(payload)).toEqual(expectedAction);
  });

  test('should create an action to set a active movie genre', () => {
    const payload = 'genre'
    const expectedAction = {
      payload,
      type: moviesSlice.setActiveMovieGenre.type,
    };

    expect(moviesSlice.setActiveMovieGenre(payload)).toEqual(expectedAction);
  });

  test('should create an action to set a active sort type', () => {
    const payload = 'sort'
    const expectedAction = {
      payload,
      type: moviesSlice.setActiveSortType.type,
    };

    expect(moviesSlice.setActiveSortType(payload)).toEqual(expectedAction);
  });

  test('reducer should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      movies: {},
      moviesOrder: [],
      search: '',
      activeMovieGenre: '',
      activeSortType: 'release_date'
    });
  });

  test('should handle setSearch', () => {
    const payload = 'search'

    expect(reducer({}, moviesSlice.setSearch(payload))).toEqual({
      search: payload,
    });
  });

  test('should handle setActiveMovieGenre', () => {
    const payload = 'genre'

    expect(reducer({}, moviesSlice.setActiveMovieGenre(payload))).toEqual({
      activeMovieGenre: payload,
    });
  });

  test('should handle setActiveSortType', () => {
    const payload = 'sort'

    expect(reducer({}, moviesSlice.setActiveSortType(payload))).toEqual({
      activeSortType: payload,
    });
  });

  test('should handle getListMovies', () => {
    const payload = { data: [{ id: 'id1' }, { id: 'id2' }] };

    expect(reducer({}, moviesSlice.getListMovies.fulfilled(payload))).toEqual({
      moviesOrder: ['id1', 'id2'],
      movies: { id1: { id: 'id1' }, id2: { id: 'id2', } },
    });
  });

  test('should handle updateMovie', () => {
    const payload = { id: 'id1' };

    expect(reducer({ movies: {} }, moviesSlice.updateMovie.fulfilled(payload))).toEqual({
      movies: { id1: payload },
    });
  });
})