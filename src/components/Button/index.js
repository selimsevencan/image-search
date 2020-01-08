import React, { useContext } from 'react';
import { Context } from '../../Store';
import { getData } from '../../utils.js';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const ButtonContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 10px;

  ${({ isApiRequested }) => isApiRequested && `
    @media only screen and (min-width: 1300px) {
      margin-top: 11px;
    }
  `}
`;
const Button = styled.button`
  background: #2A2B8D;
  border-radius: 25px;
  width: 246px;
  height: 50px;
  font-size: 14px;
  font-weight: bold;
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
`;

export default () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const { 
    searchTerm,
    isLoading,
    isApiRequested,
    collection,
  } = state;
  const onClick = () => {
    dispatch({type: 'SET_PAGE',  payload: 1 });
    getData(state, 1, dispatch);
    history.push(`/list/${searchTerm}/${collection}`);
  };
  const isDisabled = !Boolean(searchTerm) || isLoading;
  
  return (
    <ButtonContainer
      isApiRequested={isApiRequested}
    >
      <Button
        onClick={onClick}
        disabled={isDisabled}
      >
        SEARCH
      </Button>
    </ButtonContainer>
  );
};