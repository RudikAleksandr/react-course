import React, { useCallback, useReducer } from 'react';
import { Row, Col, Nav, Button } from 'react-bootstrap';
import MovieFormModal from '../MovieFormModal';

import cn from './Header.module.css';

// Custom Hook
const useToggle = (initialValue = false) => {
  return useReducer((state) => !state, initialValue);
}

const Header = ({ children }) => {
  const [isOpen, toggleIsOpen] = useToggle();

  const handleClickAddMovie = useCallback(() => {
    toggleIsOpen();
  }, [toggleIsOpen]);

  const handleHideModal = useCallback(() => {
    toggleIsOpen();
  }, [toggleIsOpen]);

  return (
    <Col className={cn.header}>
      <Row className="justify-content-between align-items-end mb-5 ml-5 mr-5 mt-3">
        <Nav.Link className={cn.netflixLink} href="/home"><b>netflix</b>roulette</Nav.Link>
        <Button
          variant=""
          className={cn.addMovieButton}
          onClick={handleClickAddMovie}
        >
          + Add movie
        </Button>
      </Row>
      {children}
      {isOpen &&
        <MovieFormModal
          isCreateMode
          onHide={handleHideModal}
        />
      }
    </Col>
  );
}

export default Header;
