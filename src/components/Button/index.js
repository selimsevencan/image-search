import React from 'react';

import { useStore } from '../../Store.js';
import { searchValue } from '../../actions';


export default () => {
  const [{ value }, dispatch] = useStore();

  const onClick = () => {
    dispatch(searchValue(value));
  }
  return (
    <div className={'input'}>
      <button
        onClick={onClick}
      >
        Search
      </button>
    </div>
  );
};