import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage';

function App() {
  
  const [ appTitle, setAppTitle ] = useState<string | undefined>('Im in app component');

  const changeAppTitleFromHomePage = (newTitle: string | undefined) => {
    setAppTitle(newTitle);
  };

  return (
    <div className="App">
      <p>{appTitle}</p>
      <HomePage
        logo={logo}
        changeAppTitleFromHomePage={(newTitle: string | undefined) => changeAppTitleFromHomePage(newTitle)
        }
      />
    </div>
  );
}

export default App;
