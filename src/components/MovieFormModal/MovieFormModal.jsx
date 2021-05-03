import React, { useMemo } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createMovie, updateMovie } from '../../redux/moviesSlice';
import { FieldInput, FieldDate, FieldSelect, Label } from '../common';
import './MovieFormModal.css';

const MovieSchema = yup.object().shape({
  title: yup.string().required('(required)'),
  tagline: yup.string().required('(required)'),
  release_date: yup.date(),
  poster_path: yup.string().url('(invalid url)').required('(required)'),
  overview: yup.string().required('(required)'),
  runtime: yup.number('(required number)').typeError('(must be a number)').min(0, '(min 0)').required('(required)'),
  genres: yup.array().min(1, '(must have at least one genre)').required('(required)'),
});

const optionsGenres = [
  { value: 'Documentary', label: 'Documentary' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Crime', label: 'Crime' }
];

const initialMovie = {
  title: '',
  tagline: '',
  release_date: new Date(),
  poster_path: '',
  overview: '',
  runtime: '',
  genres: []
};

const MovieFormModal = ({ movie = initialMovie, onHide }) => {
  const dispatch = useDispatch();
  const isCreateMode = useMemo(() => !movie.id, [movie.id]);
  const formik = useFormik({
    initialValues: movie,
    validationSchema: MovieSchema,
    onSubmit: (values) => {
      const actionMovie = isCreateMode ? createMovie : updateMovie;
      dispatch(actionMovie(values));
      onHide();
    },
    validateOnMount: true,
  });

  return (
    <Modal
      centered
      size="lg"
      show={true}
      className="modalFormMovie"
      onHide={onHide}
      data-testid="movieFormModal">
      <Modal.Header closeButton>
        <h2>{isCreateMode ? 'Add' : 'Edit'} movie</h2>
      </Modal.Header>
      <Modal.Body>
        {!isCreateMode &&
          <>
            <Label text="movie id" />
            <Label className="movieId" text={movie.id} />
          </>
        }
        <FieldInput
          label={`title ${formik.errors.title || ''}`}
          name="title"
          value={formik.values.title}
          placeholder="Input title"
          onChange={formik.handleChange}
        />
        <FieldInput
          label={`tagline ${formik.errors.tagline || ''}`}
          name="tagline"
          value={formik.values.tagline}
          placeholder="Input tagline"
          onChange={formik.handleChange}
        />
        <FieldDate
          label="release date"
          name="release_date"
          value={formik.values.release_date}
          placeholderText="Select release date"
          onChange={formik.setFieldValue}
        />
        <FieldInput
          label={`movie url ${formik.errors.poster_path || ''}`}
          type="url"
          name="poster_path"
          value={formik.values.poster_path}
          onChange={formik.handleChange}
          placeholder="Input URL"
        />
        <FieldSelect
          label={`genres ${formik.errors.genres || ''}`}
          name="genres"
          value={formik.values.genres}
          onChange={formik.setFieldValue}
          options={optionsGenres}
          placeholder="Select genre"
        />
        <FieldInput
          label={`overview ${formik.errors.overview || ''}`}
          name="overview"
          value={formik.values.overview}
          placeholder="Input overview"
          onChange={formik.handleChange}
        />
        <FieldInput
          label={`runtime ${formik.errors.runtime || ''}`}
          type="number"
          name="runtime"
          value={formik.values.runtime}
          placeholder="Input runtime"
          onChange={formik.handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={formik.handleReset} variant="secondary">Reset</Button>
        <Button onClick={formik.handleSubmit} className="ml-3">{isCreateMode ? 'Submit' : 'Save'}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieFormModal;
