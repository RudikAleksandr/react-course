import React, { useCallback, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createMovie, updateMovie } from '../../redux/moviesSlice';
import { FieldInput, FieldDate, FieldSelect, Label } from '../common';
import './MovieFormModal.css';

const optionsGenres = [
  { value: 'Documentary', label: 'Documentary' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Crime', label: 'Crime' }
];

const initialMovie = {
  title: '',
  release_date: new Date(),
  poster_path: '', overview: '',
  runtime: '',
  genres: []
};

const MovieFormModal = ({ isCreateMode = false, movie = initialMovie, onHide }) => {
  const [movieForm, setMovie] = useState(movie);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleChangeData = useCallback(({ target }) => {
    setMovie((movieForm) => ({
      ...movieForm,
      [target.name]: target.valueAsNumber || target.value
    }));
  }, []);

  const handleSelectData = useCallback((name) => (value) => {
    setMovie((movieForm) => ({
      ...movieForm,
      [name]: Array.isArray(value) ? value.map((item) => item.value) : value,
    }));
  }, []);

  const handleResetValues = useCallback(() => {
    setMovie((movieForm => ({ ...initialMovie, id: movieForm.id })));
  }, []);

  const handleSaveMovie = useCallback(async () => {
    const actionMovie = isCreateMode ? createMovie : updateMovie;
    const data = await dispatch(actionMovie(movieForm));
    if (data.meta.requestStatus === "rejected") {
      setErrorMessage('Input all valid data');
    } else {
      onHide();
    }
  }, [dispatch, onHide, isCreateMode, movieForm]);

  const { id, title, release_date, poster_path, overview, runtime, genres } = movieForm;
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
          name="title"
          value={title}
          placeholder="Input title"
          onChange={handleChangeData}
        />
        <FieldDate
          selected={new Date(release_date)}
          placeholderText="Select release date"
          label="release date"
          onChange={handleSelectData('release_date')}
        />
        <FieldInput
          label="movie url"
          type="url"
          name="poster_path"
          value={poster_path}
          placeholder="Input URL"
          onChange={handleChangeData}
        />
        <FieldSelect
          label="genres"
          value={genres.map((genre => ({ value: genre, label: genre })))}
          onChange={handleSelectData('genres')}
          name="genres"
          options={optionsGenres}
          placeholder="Select genre"
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
        <span className="errorMessage">{errorMessage}</span>
        <Button onClick={handleResetValues} variant="secondary">Reset</Button>
        <Button onClick={handleSaveMovie} className="ml-3">{isCreateMode ? 'Submit' : 'Save'}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieFormModal;
