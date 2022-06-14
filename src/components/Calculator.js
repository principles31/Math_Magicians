import React, { useState } from 'react';
import Keys from './Keys';

const Calcu = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handleEvent = (e) => {
    const oprObject = calculate(state, e.target.textContent);
    setState(oprObject);
  };

  const { total, operation, next } = state;
  const oprnd = operation === '%' ? 'mod' : operation;
  let result = '';
  if (total) {
    result = `${total} ${oprnd || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${oprnd || ''}`;
  }
  return (
