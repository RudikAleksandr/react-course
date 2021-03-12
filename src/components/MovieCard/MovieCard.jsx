import React from 'react';
import { Row, Col, Image, Dropdown } from 'react-bootstrap';
import cn from './MovieCard.module.css';

const ItemMovie = ({ movie }) => (
  <Row className="flex-column">
    {/* <div className="">&#8942;</div>
    <Dropdown>
      <Dropdown.Toggle className={cn.dropdownToggle} variant="" id="dropdown-basic" />
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
    <Image className={cn.imageMovie} src={movie.photoLink} alt="Movie screensaver" />
    <Col className="pl-0 pr-0 mt-3">
      <span className={cn.nameMovie}>{movie.name}</span>
      <span className={cn.releaseDate}>{movie.releaseYear}</span>
    </Col>
    <span className={cn.typeMovie}>{movie.type}</span>
  </Row>
);

export default ItemMovie;
