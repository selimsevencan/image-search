import React from 'react';
import Store from './Store';
import reducer from "./rootReducer";
import styled, { createGlobalStyle } from 'styled-components'

import Header from './components/Header';
import Loading from './components/Loading';
import PhotoList from './components/PhotoList/Container';

const AppContainer = styled.div`
  background: #050417;
  height: 100vh;
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
#modal-root {
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
        <AppContainer>
          <Header />
          <PhotoList />
          <Loading />
        </AppContainer>
      </Store>
    );
}

export default App;
