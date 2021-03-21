import React from 'react';
import { FormGroup } from 'react-bootstrap';
import Select from 'react-select';
import Label from '../Label';
import './FieldSelect.css';

const FieldSelect = ({ label, value, onChange, name, options, placeholder }) => (
  <FormGroup>
    {label && <Label text={label} />}
    <Select
      isMulti="true"
      value={value}
      onChange={onChange}
      name={name}
      options={options}
      placeholder={placeholder}
    />
  </FormGroup>
);

export default FieldSelect;
