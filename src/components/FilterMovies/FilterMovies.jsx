import React, { useCallback } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import cn from './FilterMovies.module.css';

const movieTypes = ['all', 'documentary', 'comedy', 'horror', 'crime'];

const FilterMovies = ({ activeType, onClickMovieGenre }) => {
  // PATTERN: memoization of callbacks
  const handleClickMovieType = useCallback(({ target: { textContent } }) => {
    onClickMovieGenre(textContent);
  }, [onClickMovieGenre]);

  // PATTERN: Fragments
  const movieTypeButtons = movieTypes.map((movieType) => (
    <Button
      key={movieType}
      variant=""
      onClick={handleClickMovieType}
      className={`${cn.filterButton} ${activeType === movieType ? cn.activeFilterButton : ''}`}
    >
      {movieType}
    </Button>
  ));

  return (
    <Row className={`${cn.filterMovies}`}>
      <Col className="pl-0">
        {movieTypeButtons}
      </Col>
    </Row>
  );
};

FilterMovies.defaultProps = {
  activeType: undefined,
};

FilterMovies.propTypes = {
  activeType: PropTypes.string,
  onClickMovieGenre: PropTypes.func.isRequired,
};

export default FilterMovies;
