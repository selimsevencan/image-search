import React from 'react';

// import { useStore } from '../../Store.js';
// import {  } from '../../actions';

const options = [
  {
    value: 'featured',
    label: 'Featured',
  },
  {
    value: 'wallpapers',
    label: 'Wallpapers',
  },
  {
    value: 'nature',
    label: 'Nature',
  },
  {
    value: 'archtiture',
    label: 'Archtiture',
  },
  {
    value: 'textures',
    label: 'Textures',
  }
]

export default () => {
  const onChange = (e) => {
    console.log('e', e.target.value);
  }
  return (
    <div className={'input'}>
      <select
        onChange={onChange}
      >
        {
          options.map(item => {
            return (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>)
          })
        }
      </select>
    </div>
  );
};