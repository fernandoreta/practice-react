import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  const [ appTitle, setAppTitle ] = useState<string | undefined>('Im in app component');

  const changeAppTitleFromHomePage = (newTitle: string | undefined) => {
    setAppTitle(newTitle);
  };

  // element prop now is the same as exact in prev versions
  return (
    <div className="App">
      <p>{appTitle}</p>
      <Routes>
        <Route path="/home"
          element={
            <HomePage
            logo={logo}
            changeAppTitleFromHomePage={(newTitle: string | undefined) => changeAppTitleFromHomePage(newTitle)
            }
          />
          }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
