import React from 'react';
import { Row, Col, Nav, Image } from 'react-bootstrap';
import cn from './MovieDetails.module.css';
import searchIcon from './search.svg';

const MovieDetails = ({ movie, onClose }) => {
  return (
    <Col className={cn.root}>
      <Row className="justify-content-between align-items-end ml-5 mr-5 mt-3">
        <Nav.Link className={cn.netflixLink} href="/home"><b>netflix</b>roulette</Nav.Link>
        <Image
          className={cn.iconSearch}
          src={searchIcon}
          alt="Search icon"
          onClick={onClose}
        />
      </Row>
      <Row className="justify-content-between align-items-start m-auto w-75">
        <Image
          width="210px"
          className={cn.imageMovie}
          src={movie.poster_path}
          alt="Movie screensaver"
        />
        <Col className="ml-4">
          <h2 className={cn.movieTitle}>
            {movie.title} <span className={cn.movieRating}>{movie.vote_average}</span>
          </h2>
          <h3 className={cn.movieSlogan}>{movie.tagline}</h3>
          <span className={cn.movieReleaseYear}>{new Date(movie.release_date).getFullYear()}</span>
          <span className={cn.movieDuration}>{movie.runtime} min</span>
          <p className={cn.movieOverview}>{movie.overview}</p>
        </Col>
      </Row>


    </Col>
  );
}

export default MovieDetails;
