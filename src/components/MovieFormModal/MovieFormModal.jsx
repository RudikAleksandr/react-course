import React, { useCallback, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FieldInput, FieldDate, Label, FieldSelect } from '../common';
import './MovieFormModal.css';

const genres = ['Action', 'Comedy', 'Drama', 'Crime', 'Documentary'];
const MovieFormModal = ({ isCreateMode = false, movieProp = {}, onHide }) => {
  const [movie, setMovie] = useState(movieProp);

  const handleChangeData = useCallback(({ target }) => {
    setMovie((movie) => ({
      [target.name]: target.value,
      ...movie
    }));
  }, []);

  const handleSelectData = useCallback((name) => (value) => {
    setMovie((movie) => ({
      [name]: value,
      ...movie
    }));
  }, []);

  const { id, name, releaseDate, url, overview, runtime, genre } = movie;
  return (
    <Modal
      centered
      size="lg"
      show={true}
      className="modalFormMovie"
      onHide={onHide}>
      <Modal.Header closeButton>
        <h2>{isCreateMode ? 'Add' : 'Edit'} movie</h2>
      </Modal.Header>
      <Modal.Body>
        {!isCreateMode &&
          <>
            <Label text="movie id" />
            <Label className="movieId" text={id} />
          </>
        }
        <FieldInput
          label="title"
          name="name"
          value={name}
          placeholder="Input title"
          onChange={handleChangeData}
        />
        <FieldDate
          selected={releaseDate}
          placeholderText="Select release date"
          label="release date"
          onChange={handleSelectData('releaseDate')}
        />
        <FieldInput
          label="movie url"
          type="url"
          name="url"
          value={url}
          placeholder="Input URL"
          onChange={handleChangeData}
        />
        <FieldSelect
          label="genre"
          value={genre}
          options={genres}
          placeholder="Select genre"
          onSelect={handleSelectData('genre')}
        />
        <FieldInput
          label="overview"
          name="overview"
          value={overview}
          placeholder="Input overview"
          onChange={handleChangeData}
        />
        <FieldInput
          label="runtime"
          type="number"
          name="runtime"
          value={runtime}
          placeholder="Input runtime"
          onChange={handleChangeData}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Reset</Button>
        <Button className="ml-3">{isCreateMode ? 'Submit' : 'Save'}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieFormModal;
