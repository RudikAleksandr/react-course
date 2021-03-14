import React from 'react';
import { Dropdown, FormGroup } from 'react-bootstrap';
import Label from '../Label';
import './FieldSelect.css';

const FieldSelect = ({ label, ...props }) => (
  <FormGroup>
    {label && <Label text={label} />}
    <Dropdown onSelect={props.onSelect}>
      <Dropdown.Toggle variant="">
        {props.value || props.placeholder}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.options.map((option) => (
          <Dropdown.Item key={option} eventKey={option}>{option}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </FormGroup>
);

export default FieldSelect;
