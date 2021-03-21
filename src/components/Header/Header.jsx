import React, { useCallback, useEffect, useReducer } from 'react';
import { Row, Col, Nav, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetailsMovie } from '../../redux/moviesSelectors';
import { setSearch, setDetailsMovieId } from '../../redux/moviesSlice';
import MovieFormModal from '../MovieFormModal';
import SearchMovies from '../SearchMovies';
import MovieDetails from '../MovieDetails';
import cn from './Header.module.css';

// Custom Hook
const useToggle = (initialValue = false) => {
  return useReducer((state) => !state, initialValue);
}

const Header = () => {
  const [isOpenCreateModal, toggleIsOpen] = useToggle();
  const detailsMovie = useSelector(selectDetailsMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [detailsMovie])

  const handleCloseDetails = useCallback(() => {
    dispatch(setDetailsMovieId(''));
  }, [dispatch])

  const handleSearchMovies = useCallback((search) => {
    dispatch(setSearch(search));
  }, [dispatch])

  const handleToggleCreateModal = useCallback(() => {
    toggleIsOpen();
  }, [toggleIsOpen]);

  return (
    <>
      {detailsMovie ? <MovieDetails movie={detailsMovie} onClose={handleCloseDetails} /> :
        <Col className={cn.header}>
          <Row className="justify-content-between align-items-end mb-5 ml-5 mr-5 mt-3">
            <Nav.Link className={cn.netflixLink} href="/home"><b>netflix</b>roulette</Nav.Link>
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
            <MovieFormModal
              isCreateMode
              onHide={handleToggleCreateModal}
            />
          }
        </Col>
      }
    </>
  );
}

export default Header;
