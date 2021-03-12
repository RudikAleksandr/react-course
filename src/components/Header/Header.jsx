import React, { useCallback, useState } from 'react';
import { Row, Col, Nav, Button } from 'react-bootstrap';
import MovieFormModal from '../MovieFormModal';

import cn from './Header.module.css';

const Header = ({ children }) => {
  const [isOpenAddMovie, setOpenAddMovie] = useState(false);

  const handleClickAddMovie = useCallback(() => {
    setOpenAddMovie(true);
  }, []);

  const handleHideModal = useCallback(() => {
    setOpenAddMovie(false);
  }, []);

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
      {isOpenAddMovie &&
        <MovieFormModal
          isCreateMode
          onHide={handleHideModal}
        />
      }
    </Col>
  );
}

export default Header;
