import React from 'react';
import { FormControl, Row, Col, Button } from 'react-bootstrap';
import cn from './SearchMovies.module.css';

const SearchMovies = () => (
  <Row className={`justify-content-center ${cn.searchMovies}`}>
    <Col xs="11" md="7">
      <h1 className={cn.findMovieTitle}>Find your movie</h1>
    </Col>
    <Col xs="11" md="7" className="mt-4">
      <Row className="justify-content-center">
        <Col xs="8" xl="8" xxl="9">
          <FormControl
            className={cn.movieInput}
            placeholder="What do you want to watch?"
            aria-label="What do you want to watch?"
            aria-describedby="basic-addon2"
          />
        </Col>
        <Col xs="4" className="pl-0">
          <Button variant="" className={cn.searchButton}>Search</Button>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default SearchMovies;
