import React, { useCallback, useEffect, useReducer } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { setSearch } from '../../redux/moviesSlice';
import MovieFormModal from '../MovieFormModal';
import SearchMovies from '../SearchMovies';
import cn from './Header.module.css';

// Custom Hook
export const useToggle = (initialValue = false) => {
  return useReducer((state) => !state, initialValue);
}

const Header = () => {
  const history = useHistory();
  const searchQuery = new URLSearchParams(useLocation().search).get('query');

  const [isOpenCreateModal, toggleIsOpen] = useToggle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(searchQuery || ''));
  }, [searchQuery, dispatch]);

  const handleSearchMovies = useCallback((search) => {
    history.push(`/search?query=${search}`);
  }, [history])

  const handleToggleCreateModal = useCallback(() => {
    toggleIsOpen();
  }, [toggleIsOpen]);

  return (
    <Col className={cn.header}>
      <Row className="justify-content-between align-items-end mb-5 ml-5 mr-5 mt-3">
        <Link className={cn.netflixLink} to="/"><b>netflix</b>roulette</Link>
        <Button
          variant=""
          className={cn.addMovieButton}
          onClick={handleToggleCreateModal}
        >
          + Add movie
        </Button>
      </Row>
      <SearchMovies onSearch={handleSearchMovies} />
      {isOpenCreateModal &&
        <MovieFormModal onHide={handleToggleCreateModal} />
      }
    </Col>
  );
}

export default Header;
