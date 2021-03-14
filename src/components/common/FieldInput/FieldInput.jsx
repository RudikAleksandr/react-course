import React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
import Label from '../Label';
import './FieldInput.css';

const FieldInput = ({ label, ...props }) => (
  <FormGroup>
    {label && <Label text={label} />}
    <FormControl type="calendar" {...props} />
  </FormGroup>
);

export default FieldInput;
