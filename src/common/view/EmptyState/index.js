import React from 'react';
import styled from 'styled-components'

const EmptyState = styled.div`
  color: #2A2B8D;
  position: absolute;
  top: 40%;
  left: 30%;
`;

export default ({children}) => {
  return (
    <EmptyState>
      {children}
    </EmptyState>
  );
};