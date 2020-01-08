import React from 'react';
import Store from './Store';
import reducer from "./rootReducer";
import Router from  './route';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
#portal-root {
  position: relative;
  z-index: 10;
}
`;

function App() {
    return (
      <Store
        reducer={reducer}
      >
        <GlobalStyle />
       <Router />
      </Store>
    );
}

export default App;
