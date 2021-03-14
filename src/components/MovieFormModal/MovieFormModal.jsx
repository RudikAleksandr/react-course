import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FieldInput, FieldDate, Label, FieldSelect } from '../common';
import './MovieFormModal.css';

const genres = ['Action', 'Comedy', 'Drama', 'Crime', 'Documentary'];
class MovieFormModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.movie
    };
  }

  static defaultProps = {
    isCreateMode: false,
    movie: {}
  };

  handleChangeData = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSelectData = (name) => (value) => {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { onHide, isCreateMode } = this.props;
    const { id, name, releaseDate, url, overview, runtime, genre } = this.state;
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
            onChange={this.handleChangeData}
          />
          <FieldDate
            selected={releaseDate}
            placeholderText="Select release date"
            label="release date"
            onChange={this.handleSelectData('releaseDate')}
          />
          <FieldInput
            label="movie url"
            type="url"
            name="url"
            value={url}
            placeholder="Input URL"
            onChange={this.handleChangeData}
          />
          <FieldSelect
            label="genre"
            value={genre}
            options={genres}
            placeholder="Select genre"
            onSelect={this.handleSelectData('genre')}
          />
          <FieldInput
            label="overview"
            name="overview"
            value={overview}
            placeholder="Input overview"
            onChange={this.handleChangeData}
          />
          <FieldInput
            label="runtime"
            type="number"
            name="runtime"
            value={runtime}
            placeholder="Input runtime"
            onChange={this.handleChangeData}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Reset</Button>
          <Button className="ml-3">{isCreateMode ? 'Submit' : 'Save'}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MovieFormModal;
