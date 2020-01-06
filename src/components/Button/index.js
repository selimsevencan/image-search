import React, { useContext } from 'react';
import { Context } from '../../Store';
import { getData } from '../../utils.js';

import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-top: 11px;
`;
const Button = styled.button`
  background: #2A2B8D;
  border-radius: 25px;
  width: 246px;
  height: 50px;
  font-size: 14px;
  letter-spacing: 0.1em;
  border: 0;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
  font-weight: 900;
  &:hover {
    filter: brightness(150%);
  }
  &:disabled {
    cursor: not-allowed;
    filter: brightness(50%);
  }
  @media only screen and (max-width: 930px) {
    width: 200px;
  }
  ${({ extraMargin }) => extraMargin && `
    margin-top: 75px;
  `}
`;

export default () => {
  const [state, dispatch] = useContext(Context);
  const { 
    searchTerm,
    isLoading,
    isApiRequested,
  } = state;
  const onClick = () => {
    dispatch({type: 'SET_PAGE',  payload: 1 });
    getData(state, 1, dispatch);
  };
  const isDisabled = !Boolean(searchTerm) || isLoading;
  return (
    <ButtonContainer>
      <Button
        onClick={onClick}
        disabled={isDisabled}
        extraMargin={!isApiRequested}
      >
        SEARCH
      </Button>
    </ButtonContainer>
  );
};