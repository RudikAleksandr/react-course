import React from 'react';
import { FormGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import Label from '../Label';
import './FieldDate.css';

const FieldDate = ({
  label, name, value, onChange, ...props
}) => (
  <FormGroup>
    {label && <Label text={label} />}
    <DatePicker
      selected={(value && new Date(value)) || null}
      onChange={(val) => onChange(name, val)}
      {...props}
    />
  </FormGroup>
);

export default FieldDate;
