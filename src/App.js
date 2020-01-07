import React from 'react';
import Store from './Store';
import reducer from "./rootReducer";
import Router from  './route';

function App() {
    return (
      <Store
        reducer={reducer}
      >
       <Router />
      </Store>
    );
}

export default App;
