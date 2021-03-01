import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from '../MovieCard';
import PropTypes from 'prop-types';
import cn from './ListMovies.module.css';

const ListMovies = ({ listMovies = [] }) => (
  <Row className={`flex-column mb-4 ${cn.listMoviesContainer}`}>
    <Col className="pl-0 mt-4 mb-4">
      <span className={cn.countMovies}>{listMovies.length}</span>
      <span className={cn.moviesFoundLabel}>movies found</span>
    </Col>
    <Col>
      <div className={cn.listMovies}>
        {listMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Col>
  </Row>
);

ListMovies.propTypes = {
  listMovies: PropTypes.array,
};

export default ListMovies;
