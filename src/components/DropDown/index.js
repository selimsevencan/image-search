import React, { useContext } from 'react';
import { Context } from '../../Store';

import './DropDown.css';

const options = [
  'featured',
  'wallpapers',
  'nature',
  'archtiture',
  'textures',
]

export default () => {
  const [{collection, isApiRequested}, dispatch] = useContext(Context);

  const onChange = (e) => {
    dispatch({type: 'SELECT_COLLECTION',  payload: e.target.value });
  }

  return (
    <div className={'dropdownWrapper'}>
      <select
        onChange={onChange}
        placeholder={'Collections'}
        value={collection}
        className={isApiRequested ? 'select' : 'margin-top  select'}
      >
        {
          options.map(item => {
            return (
            <option
              key={item}
            >
              {item}
            </option>)
          })
        }
      </select>
    </div>
  );
};