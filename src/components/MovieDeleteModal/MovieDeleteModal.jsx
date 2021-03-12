import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './MovieDeleteModal.css';

const MovieDeleteModal = ({ onHide, onConfirm }) => (
  <Modal
    centered
    size="lg"
    show={true}
    className="modalDeleteMovie"
    onHide={onHide}>
    <Modal.Header closeButton>
      <h2>delete movie</h2>
    </Modal.Header>
    <Modal.Body>
      <span>Are you sure want to delete this movie?</span>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onConfirm}>Confirm</Button>
    </Modal.Footer>
  </Modal>
);

export default MovieDeleteModal;
