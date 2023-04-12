import React from 'react';
import logo from './images/calculator.png';
import Add from './components/Add';
import Sub from './components/Sub';
import Mult from './components/Mult';
import Div from './components/Div';

function App() {
  return (
    <div>
      <img src={logo} alt="Calculator Logo" />
      <Add />
      <Sub />
      <Mult />
      <Div />
    </div>
  );
}

export default App;
