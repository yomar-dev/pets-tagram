import React from 'react';
import './input.scss';

export const Input = ({ type = 'text', placeholder = '' }) => {
  return <input type={type} placeholder={placeholder} className="pets-input" />;
};

export default Input;
