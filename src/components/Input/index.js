import React, { useContext } from 'react';
import { Context } from '../../Store';
import './Input.css';

export default () => {
  const [{value, isApiRequested}, dispatch] = useContext(Context);
  const onChange = (e) => {
    const value = e.target.value;
    dispatch({type: 'FILL_INPUT',  payload: value });
  }
  return (
    <div className={'inputWrapper'}>
      <input
        placeholder='Query'
        onChange={onChange}
        value={value}
        className={isApiRequested ? 'input' : 'margin-top input'}
      />
    </div>
  );
};