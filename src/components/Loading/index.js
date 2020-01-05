import React, { useContext } from 'react';
import { Context } from '../../Store';
import './Loading.css';

export default () => {
  const [{isLoading} ] = useContext(Context);
  return (<div className={isLoading ? 'loading' : ''}></div>);
};
