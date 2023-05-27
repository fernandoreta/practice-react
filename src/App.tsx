import React, { useEffect, useRef, useState } from 'react';
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
  const [ newItemName, setNewItemName ] = useState<string>();
  const [ newItemPrice, setNewItemPrice ] = useState<string>();
  const [ formIsValid, setFormIsValid ] = useState<boolean>(true);

  const changeAppTitleFromHomePage = (newTitle: string | undefined) => {
    setAppTitle(newTitle);
  };

  const removeItem = (item: IItem) => {
    setItems((lastState: IItem[]) => {
      return lastState.filter((existingItem: IItem) => {
        return existingItem.name !== item.name
      });
    });
  };
  
  const addItem = () => {
    const newItem: IItem = {
      name: newItemName,
      price: newItemPrice
    }
    setItems((lastState: IItem[]) => {
      return [ newItem, ...lastState ];
    });
  };

  const submitFormItem = (event: any) => {
    event.preventDefault();
    addItem();
  }
  // Commenting the useRef to use the onChange and cleanup function
  // const newItemName = useRef<HTMLInputElement>(null);
  // const newItemPrice = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('Enter to use effect');
    // DEBOUNCE THE CHECK TO NOT DO IN EVERY KET STROKE
    const identifier = setTimeout(() => {
      console.log('identifier');
      if (newItemName?.includes('$')) {
        setFormIsValid(false);
      } else {
        setFormIsValid(true);
      }
    }, 1000);

    return () => {
      console.log('cleanup');
      clearTimeout(identifier);
    }
  }, [newItemName, newItemPrice]);

  const newItemNameChanged = (event: any) => {
    setNewItemName(event.target.value);
  };

  const newItemPriceChanged = (event: any) => {
    setNewItemPrice(event.target.value);
  };

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
                    <Item name={item.name} price={item.price} removeItem={(item) => removeItem(item)} />
                  ))
                }
                <form onSubmit={submitFormItem}>
                  <input type="text" onChange={newItemNameChanged} />
                  <input type="number" onChange ={newItemPriceChanged} />
                  <button type='submit'>Add Item</button>
                  {!formIsValid && <span>Form is not valid</span> }
                  {/* <Button onClick={addItem} variant='contained'>Add Item</Button> */}
                </form>
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
