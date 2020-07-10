import React from 'react';
import './input.scss';

function Input({ type = 'text', value = '', placeholder = '' }) {
  return <input type={type} value={value} placeholder={placeholder} className="input" />;
}

export default Input;
