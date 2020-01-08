import React, { useContext } from 'react';
import { Context } from '../../Store';

import styled from 'styled-components';

const DropdownWrapper = styled.div`
  margin-top: 11px;
  position: relative;
  display: inline-block;
  &:before {
    content: "";
    position: absolute;
    z-index: 2;
    margin-top: -3px;
    height: 0;
    width: 0;
    right: 20px;
    top: 25px;
    border-top: 6px solid #050417;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    pointer-events: none;
  }
  &:after {
    content: "";
    position: absolute;
    top: 49px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 394px;
    height: 5px;
    background: #D5D7E5;
    opacity: 0.7;
    border-radius: 0 0 4px 4px;
  } 

  @media only screen and (max-width: 425px) {
    &:after {
      width: 213px;
  }
}
`;

const Select = styled.select`
  text-transform: capitalize;
  width: 410px;
  height: 50px;
  font-size: 14px;
  border-radius: 4px;
  padding-left: 8px;
  color: #050417;
  border: 0;
  -moz-appearance:none;
  -webkit-appearance:none;
  appearance:none;
  background: white;
  &:-ms-expand {
    display:none;
   }
  @media only screen and (max-width: 425px) {
    width: 213px;
  }
`;

const options = [
  {
    value: 212915,
    name: 'nature'
  },
  {
    value: 490,
    name: 'architecture',
  },
  {
    value: 1224492,
    name: 'featured'
  },
  {
    value: 827737,
    name: 'sport'
  },
  {
    value: 343012,
    name: 'wallpapers',
  },
  {
    value: 363,
    name: 'textures',
  }
];

export default () => {
  const [{collection}, dispatch] = useContext(Context);

  const onChange = (e) => {
    dispatch({type: 'SELECT_COLLECTION',  payload: e.target.value });
  }

  return (
    <DropdownWrapper>
      <Select
        onChange={onChange}
        placeholder={'Collections'}
        value={collection}
        className={'select'}
      >
        {
          options.map(item => {
            return (
            <option
              key={item.value}
              value={item.name}
            >
              {item.name}
            </option>)
          })
        }
      </Select>
    </DropdownWrapper>
  );
};