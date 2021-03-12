import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FieldInput } from '../common';
import cn from './SearchMovies.module.css';

const SearchMovies = () => (
  <Row className={`justify-content-center ${cn.searchMovies}`}>
    <Col xs="11" md="7">
      <h1 className={cn.findMovieTitle}>Find your movie</h1>
    </Col>
    <Col xs="11" md="7" className="mt-4">
      <Row className="justify-content-center">
        <Col xs="8" xl="8" xxl="9">
          <FieldInput className={cn.searchInput} placeholder="What do you want to watch?" />
        </Col>
        <Col xs="4" className="pl-0">
          <Button>Search</Button>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default SearchMovies;
