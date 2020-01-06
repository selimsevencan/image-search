import React from 'react';
import styled from 'styled-components'

const EmptyState = styled.div`
  color: #2A2B8D;
  line-height: 50;
`;

export default ({children}) => {
  return (
    <EmptyState>
      {children}
    </EmptyState>
  );
};