import React from 'react';
import './App.css';

import Calcu from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="display">
        <Calcu />
      </div>
    );
  }
}

export default App;
