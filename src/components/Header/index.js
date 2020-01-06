import React, { useContext } from 'react';
import { Context } from '../../Store';

import Logo from '../Logo';
import Input from '../Input';
import Button from '../Button';
import Dropdown from '../Dropdown';

import './Header.css';

export default () => {
  const [{isApiRequested}] = useContext(Context);
  return (
    <div className={isApiRequested ? 'fixedHeader' : 'centeredHeader'}>
      <Logo />
      <Input />
      <Dropdown />
      <Button />
    </div>
  )
}