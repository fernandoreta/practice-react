import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage';
import { Route, Routes } from 'react-router-dom';
import { IItem, Item } from './Components/Item';
import { Button } from '@mui/material';

function App() {
  const initialItems: IItem[] = [
    { name: 'Chips', price: '10' },
    { name: 'Soda', price: '5' }
  ];
  const [ appTitle, setAppTitle ] = useState<string | undefined>('Im in app component');
  const [ items, setItems ] = useState<IItem[]>(initialItems);

  const changeAppTitleFromHomePage = (newTitle: string | undefined) => {
    setAppTitle(newTitle);
  };


  const addItem = () => {
    const newItem: IItem = {
      name: newItemName?.current?.value,
      price: newItemPrice?.current?.value
    }
    setItems((lastState: any) => {
      return [ newItem, ...lastState ];
    });
  };
  const newItemName = useRef<HTMLInputElement>(null);
  const newItemPrice = useRef<HTMLInputElement>(null);

  // element prop now is the same as exact in prev versions
  return (
    <div className="App">
      <p>{appTitle}</p>
      <Routes>
        <Route path="/home"
          element={
            <div>
              <div>
                <h3>Items Coming From the App Component. (Using Item Component)</h3>
                {
                  items.map(item => (
                    <Item name={item.name} price={item.price} />
                  ))
                }
                <input type="text" ref={newItemName} />
                <input type="number" ref ={newItemPrice} />
                <Button onClick={addItem} variant='contained'>Add Item</Button>
              </div>
              <HomePage
              logo={logo}
              changeAppTitleFromHomePage={(newTitle: string | undefined) => changeAppTitleFromHomePage(newTitle)
              }
            />

            </div>
          }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
