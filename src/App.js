import React from 'react';
import Store from './Store';
import reducer from "./rootReducer";
import Router from  './route';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-seri,sans-serif;
}
#root {
  overflow-x: hidden;
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
