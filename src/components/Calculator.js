import React from 'react';
import Keys from './Keys';
import calculate from '../logic/calculator';

class Calcu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

    componentDidMount = () => {
      this.setState({
        total: 0,
        next: null,
        operation: null,
      });
    }

    render() {
      const handleEvent = (e) => {
        const oprObject = calculate(this.state, e.target.textContent);
        this.setState(oprObject);
      };

      const { total, operation, next } = this.state;
      const oprnd = operation === '%' ? 'mod' : operation;
      let result = '';
      if (total) {
        result = `${total} ${oprnd || ''} ${next || ''}`;
      } else if (next) {
        result = `${next} ${oprnd || ''}`;
      }
      return (
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
      );
    }
}

export default Calcu;
