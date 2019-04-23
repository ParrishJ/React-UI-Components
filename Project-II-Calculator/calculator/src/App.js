import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'

const App = () => {
  return (
    <div className="appDiv">
      <CalculatorDisplay />
      <ActionButton text="clear"/>
      <NumberButton buttonStyle="symbolButton" text="÷" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton buttonStyle="symbolButton" text="X" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton buttonStyle="symbolButton" text="-" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton buttonStyle="symbolButton" text="+" />
      <ActionButton text="0"/>
      <NumberButton buttonStyle="symbolButton" text="=" />


    </div>
  );
};

export default App;
