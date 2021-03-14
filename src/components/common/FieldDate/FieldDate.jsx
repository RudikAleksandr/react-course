import React from 'react';
import { FormGroup, } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Label from '../Label';
import './FieldDate.css';

const FieldDate = ({ label, ...props }) => (
  <FormGroup>
    {label && <Label text={label} />}
    <DatePicker type="calendar" {...props} />
  </FormGroup>
);

export default FieldDate;
