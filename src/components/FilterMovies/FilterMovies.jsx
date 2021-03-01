import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import cn from './FilterMovies.module.css';

const movieTypes = ['all', 'documentary', 'comedy', 'horror', 'crime'];

const FilterMovies = ({ activeType = 'all', onClickMovieType }) => {

  const handleClickMovieType = ({ target: { textContent } }) => {
    if (movieTypes.includes(textContent)) {
      onClickMovieType(textContent);
    }
  }

  const movieTypeButtons = movieTypes.map((movieType, index) => (
    <Button
      key={index}
      variant=""
      className={`${cn.filterButton} ${activeType === movieType ? cn.activeFilterButton : ''}`}
    >
      {movieType}
    </Button>
  ));

  return (
    <Row className={`${cn.filterMovies}`}>
      <Col className="pl-0" onClick={handleClickMovieType}>
        {movieTypeButtons}
      </Col>
    </Row>
  );
}

FilterMovies.propTypes = {
  activeType: PropTypes.string,
  onClickMovieType: PropTypes.func.isRequired
};

export default FilterMovies;
