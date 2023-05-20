import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage';

function App() {
  
  const [ appTitle, setAppTitle ] = useState('Im in app component');

  const changeAppTitleFromHomePage = () => {
    setAppTitle('It Change');
  };

  return (
    <div className="App">
      <p>{appTitle}</p>
      <HomePage
        logo={logo}
        changeAppTitleFromHomePage={changeAppTitleFromHomePage}
      />
    </div>
  );
}

export default App;
