import React from 'react';

class Calcu extends React.PureComponent {
  render() {
    return (
      <div className="calculatorDisplay">
        <div className="result">0</div>
        <div className="operand gry">AC</div>
        <div className="operand gry">&#43;/&minus;</div>
        <div className="operand gry">%</div>
        <div className="operand op">&divide;</div>
        <div className="digits gry">7</div>
        <div className="digits gry">8</div>
        <div className="digits gry">9</div>
        <div className="digits op">&times;</div>
        <div className="digits gry">4</div>
        <div className="digits gry">5</div>
        <div className="digits gry">6</div>
        <div className="digits op">-</div>
        <div className="digits gry">2</div>
        <div className="digits gry">3</div>
        <div className="digits op">+</div>
        <div className="digits span gry">0</div>
        <div className="digits gry">.</div>
        <div className="digits gry">=</div>
      </div>
    );
  }
}

export default Calcu;
