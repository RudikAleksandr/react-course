import React, { useEffect, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import cn from './MovieDetails.module.css';
import searchIcon from './search.svg';

import { getMovie } from '../../redux/moviesSlice';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    dispatch(getMovie(id)).then(({ payload }) => {
      setMovie(payload);
    });
  }, [id, dispatch]);

  return (
    <Col className={cn.root}>
      <Row className="justify-content-between align-items-end ml-5 mr-5 mt-3">
        <Link className={cn.netflixLink} to="/">
          <b>netflix</b>
          roulette
        </Link>
        <Link to="/">
          <Image
            className={cn.iconSearch}
            src={searchIcon}
            alt="Search icon"
          />
        </Link>
      </Row>
      <Row className="justify-content-between align-items-start m-auto w-75">
        <Image
          width="210px"
          className={cn.imageMovie}
          src={movie.poster_path || ''}
          alt="Movie screensaver"
        />
        <Col className="ml-4">
          <h2 className={cn.movieTitle}>
            {movie.title}
            {' '}
            <span className={cn.movieRating}>{movie.vote_average}</span>
          </h2>
          <h3 className={cn.movieSlogan}>{movie.tagline}</h3>
          <span className={cn.movieReleaseYear}>
            {!!movie.release_date && new Date(movie.release_date).getFullYear()}
          </span>
          <span className={cn.movieDuration}>
            {movie.runtime}
            {' '}
            min
          </span>
          <p className={cn.movieOverview}>{movie.overview}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default MovieDetails;
