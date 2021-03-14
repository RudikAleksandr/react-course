import React, { useCallback, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from '../MovieCard';
import PropTypes from 'prop-types';
import cn from './ListMovies.module.css';
import MovieFormModal from '../MovieFormModal';
import MovieDeleteModal from '../MovieDeleteModal';

const ListMovies = ({ listMovies = [], onSelectMovie }) => {
  const [selectedOption, setSelectedOption] = useState({});

  const handleSelectOption = useCallback((movie, optionType) => {
    setSelectedOption({ movie, optionType });
  }, []);

  const handleHideModal = useCallback(() => {
    setSelectedOption({});
  }, []);

  const handleConfirmDelete = useCallback(() => {
    setSelectedOption({});
  }, []);

  return (
    <Row className={`flex-column mb-4 ${cn.listMoviesContainer}`}>
      <Col className="pl-0 mt-4 mb-4">
        <span className={cn.countMovies}>{listMovies.length}</span>
        <span className={cn.moviesFoundLabel}>movies found</span>
      </Col>
      <Col>
        <div className={cn.listMovies}>
          {listMovies.map((movie) => (
            <MovieCard
              onSelectOption={handleSelectOption}
              onSelectMovie={onSelectMovie}
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </Col>
      {selectedOption.optionType === "EDIT" &&
        <MovieFormModal
          movie={selectedOption.movie}
          onHide={handleHideModal}
        />
      }
      {selectedOption.optionType === "DELETE" &&
        <MovieDeleteModal
          onHide={handleHideModal}
          onConfirm={handleConfirmDelete}
        />
      }
    </Row>
  )
};

ListMovies.propTypes = {
  listMovies: PropTypes.array,
};

export default ListMovies;
