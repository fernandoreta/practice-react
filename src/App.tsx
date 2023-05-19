import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage';

function App() {
  const handlePropFromChild = (propFromChild: string) => {
    // Use the propFromChild value in the parent component as needed
    console.log(propFromChild);
  };
  return (
    <div className="App">
      <HomePage onPropFromChild={handlePropFromChild} logo={logo} />
    </div>
  );
}

export default App;
