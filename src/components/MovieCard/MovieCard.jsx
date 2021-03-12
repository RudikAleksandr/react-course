import React, { useCallback } from 'react';
import { Row, Col, Image, Dropdown } from 'react-bootstrap';
import cn from './MovieCard.module.css';

const MovieCard = ({ movie, onSelectOption }) => {

  const handleSelectOption = useCallback((optionType) => {
    onSelectOption(movie, optionType);
  }, [movie, onSelectOption]);

  return (
    <Row className={`flex-column ${cn.movieCard}`}>
      <Dropdown onSelect={handleSelectOption}>
        <Dropdown.Toggle className={cn.dropdownToggle} variant="" id="dropdown-basic" />
        <Dropdown.Menu align="right" className={cn.dropdownMenu}>
          <Dropdown.Item eventKey="EDIT" className={cn.dropdownItem}>Edit</Dropdown.Item>
          <Dropdown.Item eventKey="DELETE" className={cn.dropdownItem}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Image className={cn.imageMovie} src={movie.photoLink} alt="Movie screensaver" />
      <Col className="pl-0 pr-0 mt-3">
        <span className={cn.nameMovie}>{movie.name}</span>
        <span className={cn.releaseDate}>{movie.releaseDate.getFullYear()}</span>
      </Col>
      <span className={cn.typeMovie}>{movie.genre}</span>
    </Row>
  )
};

export default MovieCard;
