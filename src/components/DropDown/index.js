import React, { useContext } from 'react';
import { Context } from '../../Store';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  margin-top: 11px;
`;

const Select = styled.select`
  text-transform: capitalize;
  width: 410px;
  height: 50px;
  font-size: 14px;
  border-radius: 4px;
  padding-left: 20px;
  color: #050417;
  box-shadow: 1px 7px 3px -4px #D5D7E5;

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
    value: 220388,
    name: 'wallpapers',
  },
  {
    value: 528237,
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