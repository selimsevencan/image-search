import React, { useContext } from 'react';
import { Context } from '../../Store';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-top: 11px;
`;

const Input = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 4px;
  font-size: 14px;
  color: #050417;
  padding-left: 8px;
  border: 0;

  @media only screen and (max-width: 425px) {
    width: 200px;
  }
`;

export default () => {
  const [{value }, dispatch] = useContext(Context);
  const onChange = (e) => {
    const value = e.target.value;
    dispatch({type: 'FILL_INPUT',  payload: value });
  }
  return (
    <InputWrapper>
      <Input
        placeholder='Query'
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
};