import React, { useState } from 'react';
import Keys from './Keys';
import calculate from '../logic/calculate';

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
    <div className="calculator-dis">
      <p className="math-intro">Lets do some Math!</p>
      <div className="calculatorDisplay">

        <div className="result">{result || 0 }</div>
        <Keys styles="operand gry" handleEvent={(e) => handleEvent(e)} val="AC" />
        <Keys styles="operand gry" handleEvent={(e) => handleEvent(e)} val="+/-" />
        <Keys styles="operand gry" handleEvent={(e) => handleEvent(e)} val="%" />
        <Keys styles="operand op" handleEvent={(e) => handleEvent(e)} val="÷" />
        <Keys styles="digits gry" handleEvent={(e) => handleEvent(e)} val="7" />
        <Keys styles="digits gry" handleEvent={(e) => handleEvent(e)} val="8" />
        <Keys styles="digits gry" handleEvent={(e) => handleEvent(e)} val="9" />
        <Keys styles="digits op" handleEvent={(e) => handleEvent(e)} val="x" />
        <Keys styles="digits gry" handleEvent={(e) => handleEvent(e)} val="4" />
        <Keys styles="digits gry" handleEvent={(e) => handleEvent(e)} val="5" />
        <Keys styles="digits gry" handleEvent={(e) => handleEvent(e)} val="6" />
        <Keys styles="digits op" handleEvent={(e) => handleEvent(e)} val="-" />
        <Keys styles="digits gry" handleEvent={(e) => handleEvent(e)} val="1" />
        <Keys styles="digits gry" handleEvent={(e) => handleEvent(e)} val="2" />
        <Keys styles="digits gry" handleEvent={(e) => handleEvent(e)} val="3" />
        <Keys styles="digits op" handleEvent={(e) => handleEvent(e)} val="+" />
        <Keys styles="digits span gry" handleEvent={(e) => handleEvent(e)} val="0" />
        <Keys styles="digits gry" handleEvent={(e) => handleEvent(e)} val="." />
        <Keys styles="digits op" handleEvent={(e) => handleEvent(e)} val="=" />
      </div>
    </div>
  );
};

export default Calcu;
