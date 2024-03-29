import React from 'react';
import { Row, Col, Image, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import cn from './MovieCard.module.css';
import noImageAvailablePath from '../../assets/images/noImageAvailable.jpeg';

const handleErrorLoadPicture = ({ currentTarget }) => {
  currentTarget.src = noImageAvailablePath;
}

const MovieCard = ({ movie, onSelectOption }) => {
  return (
    <Row className={`flex-column ${cn.movieCard}`}>
      <Dropdown data-testid="selectOption" onSelect={onSelectOption}>
        <Dropdown.Toggle className={cn.dropdownToggle} variant="" id="dropdown-basic" />
        <Dropdown.Menu align="right" className={cn.dropdownMenu}>
          <Dropdown.Item eventKey="EDIT" className={cn.dropdownItem}>Edit</Dropdown.Item>
          <Dropdown.Item eventKey="DELETE" className={cn.dropdownItem}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Link to={`/film/${movie.id}`}>
        <Image
          className={cn.imageMovie}
          src={movie.poster_path || noImageAvailablePath}
          alt="Movie screensaver"
          onError={handleErrorLoadPicture}
        />
      </Link>
      <Col className={`${cn.colTitleRelease} pl-0 pr-0 mt-3`}>
        <span title={movie.title} className={cn.titleMovie}>{movie.title}</span>
        <span className={cn.releaseDate}>{new Date(movie.release_date).getFullYear()}</span>
      </Col>
      <span className={cn.genresMovie}>{movie.genres.join(', ')}</span>
    </Row>
  )
};

export default MovieCard;
