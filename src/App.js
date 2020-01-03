import React from 'react';
import { StoreProvider, initialState } from "./Store";
import Input from './components/Input';
import Button from './components/Button';
import DropDown from './components/DropDown';

import reducers from "./reducers";

import './App.css';

function App() {
    return (
      <StoreProvider 
        initialState={initialState} 
        reducer={reducers}
      >
        <div className={'mainWrapper'}>
          <Input />
          <Button />
          <DropDown />
        </div>
      </StoreProvider>
    );
}

export default App;
