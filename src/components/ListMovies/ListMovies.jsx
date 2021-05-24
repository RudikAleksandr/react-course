import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../MovieCard';
import cn from './ListMovies.module.css';
import MovieFormModal from '../MovieFormModal';
import MovieDeleteModal from '../MovieDeleteModal';
import { selectListMovies } from '../../redux/moviesSelectors';
import { deleteMovie, getListMovies } from '../../redux/moviesSlice';

const ListMovies = ({ search, genre, sortBy }) => {
  const [selectedOption, setSelectedOption] = useState({});
  const listMovies = useSelector(selectListMovies);
  const params = useMemo(() => ({
    search,
    sortBy,
    sortOrder: 'desc',
    searchBy: 'title',
    filter: genre,
  }), [search, genre, sortBy]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.search || params.filter) {
      params.filter = params.filter === 'all' ? '' : params.filter;
      dispatch(getListMovies(params));
    }
  }, [dispatch, params]);

  // PATTERN: memoization of callbacks
  const handleSelectOption = useCallback((movie) => (type) => {
    setSelectedOption({ movie, type });
  }, []);

  const handleHideModal = useCallback(() => {
    setSelectedOption({});
  }, []);

  const handleConfirmDelete = useCallback(async () => {
    setSelectedOption({});
    await dispatch(deleteMovie(selectedOption.movie.id));
    dispatch(getListMovies(params));
  }, [dispatch, selectedOption, params]);

  return (
    <Row className={`flex-column mb-4 ${cn.listMoviesContainer}`}>
      <Col className="pl-0 mt-4 mb-4">
        <span className={cn.countMovies}>{listMovies.length}</span>
        <span className={cn.moviesFoundLabel}>movies found</span>
      </Col>
      <Col>
        <div className={listMovies.length ? cn.listMovies : cn.noMovieFound}>
          {/* PATTERN: Fragments */}
          {!!listMovies.length && listMovies.map((movie) => (
            <MovieCard
              onSelectOption={handleSelectOption(movie)}
              key={movie.id}
              movie={movie}
            />
          ))}
          {!listMovies.length && (
            <h2 className={cn.noMovieFoundLabel}>No Movie Found</h2>
          )}
        </div>
      </Col>
      {selectedOption.type === 'EDIT'
        && (
          <MovieFormModal
            movie={selectedOption.movie}
            onHide={handleHideModal}
          />
        )}
      {selectedOption.type === 'DELETE'
        && (
          <MovieDeleteModal
            onHide={handleHideModal}
            onConfirm={handleConfirmDelete}
          />
        )}
    </Row>
  );
};

export default ListMovies;
