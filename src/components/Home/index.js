import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

import Header from '../Header';
import Loading from '../Loading';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open Sans;
  }
  #modal-root {
    position: relative;
    z-index: 10;
  }
`;


const AppContainer = styled.div`
  background: #050417;
  height: 100vh;
  text-align: center;
`;

export default () => {
  return <>
    <GlobalStyle />
    <AppContainer>
      <Header />
      <Loading />
    </AppContainer>
  </>
}