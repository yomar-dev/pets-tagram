import React from 'react';
import './input.scss';

export const Input = ({ type = 'text', value = '', placeholder = '' }) => {
  return <input type={type} value={value} placeholder={placeholder} className="input" />;
};

export default Input;
