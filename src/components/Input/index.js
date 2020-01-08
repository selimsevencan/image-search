import React, { useContext } from 'react';
import { Context } from '../../Store';

import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-top: 60px;
  ${({isApiRequested}) => isApiRequested && `
    margin-top: 11px;
  `}
`;

const Input = styled.input`
  width: 400px;
  height: 46px;
  border-radius: 4px;
  font-size: 14px;
  color: #050417;
  padding-left: 8px;
  border: 0;
  font-weight: bold;
  font-family: 'Open Sans', -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-seri,sans-serif;
  @media only screen and (max-width: 425px) {
    width: 200px;
  }
`;

export default () => {
  const [state, dispatch] = useContext(Context);
  const { searchTerm, isApiRequested } = state;
  const onChange = (e) => {
    const value = e.target.value;
    dispatch({type: 'FILL_INPUT',  payload: value });
  }

  return (
    <InputWrapper
      isApiRequested={isApiRequested}
    >
      <Input
        placeholder='Query'
        onChange={onChange}
        value={searchTerm}
      />
    </InputWrapper>
  );
};