import React, { useCallback } from 'react';
import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FieldInput } from '../common';
import cn from './SearchMovies.module.css';

const SearchMovies = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleClickSearch = useCallback(() => {
    onSearch(searchText);
  }, [onSearch, searchText]);

  const handleChangeSearch = useCallback(({ target }) => {
    setSearchText(target.value);
  }, []);

  return (
    <Row className={`justify-content-center ${cn.searchMovies}`}>
      <Col xs="11" md="7">
        <h1 className={cn.findMovieTitle}>Find your movie</h1>
      </Col>
      <Col xs="11" md="7" className="mt-4">
        <Row className="justify-content-center">
          <Col xs="8" xl="8" xxl="9">
            {/* <FieldInput
              value={searchText}
              onChange={handleChangeSearch}
              className={cn.searchInput}
              placeholder="What do you want to watch?"
            /> */}
          </Col>
          <Col xs="4" className="pl-0">
            <Button onClick={handleClickSearch}>Search</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default SearchMovies;
