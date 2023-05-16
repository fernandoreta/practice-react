import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage logo={logo} />
    </div>
  );
}

export default App;
