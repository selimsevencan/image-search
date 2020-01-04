import React from 'react';
import Store from "./Store.js";
import reducer from "./reducers";

import Header from './components/Header';
import Loading from './components/Loading';
import PhotoList from './components/PhotoList/Container';

import './App.css';

function App() {
    return (
      <Store
        reducer={reducer}
      >
        <div className={'appWrapper'}>
          <Header />
          <PhotoList />
          <Loading />
        </div>
      </Store>
    );
}

export default App;
