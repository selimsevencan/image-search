import React, { useContext } from 'react';
import { Context } from '../../Store';
import styled from 'styled-components';

import Logo from '../Logo';
import Input from '../Input';
import Button from '../Button';
import Dropdown from '../Dropdown';

const Header = styled.div`

${({ isFixed }) => isFixed && `
  position: fixed;
  background: #050417;
  display: flex;
  top: -1px;
  width: 100%;
  height: 94px;
  padding-top: 30px;
  justify-content: space-evenly;
  overflow: hidden;
  z-index: 2;
  @media only screen and (max-width: 1300px) {
    display: block;
    height: 350px;
  }
`}
  ${({ isFixed }) => !isFixed && `
    padding-top: 10%;
    }
  `}
`;

export default () => {
  const [{isApiRequested}] = useContext(Context);
  return (
    <Header 
      isFixed={isApiRequested}
    >
      <Logo />
      <Input />
      <Dropdown />
      <Button />
    </Header>
  )
}