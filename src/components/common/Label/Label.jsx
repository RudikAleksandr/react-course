import React from 'react';
import { FormLabel } from 'react-bootstrap';
import cn from './Label.module.css';

const Label = ({ className = '', text = '', ...props }) => (
  <FormLabel
    className={`${cn.label} ${className}`}
    {...props}
  >
    {text}
  </FormLabel>
);

export default Label;
