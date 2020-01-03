  import React from 'react';

import { useStore } from '../../Store.js';
import { fillValue } from '../../actions';


export default () => {
  const [{ value }, dispatch] = useStore();
  console.log('value', value);
  return (
    <div className={'input'}>
      <input
        placeholder='Search…'
        onChange={e => dispatch(fillValue(e.target.value))}
        value={value}
      />
    </div>
  );
};