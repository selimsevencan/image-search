import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Loading from '../Loading';

const AppContainer = styled.div`
  background: #050417;
  height: 100vh;
  text-align: center;
`;

export default () => {
  return (
    <AppContainer>
      <Header />
      <Loading />
    </AppContainer>
  )
}