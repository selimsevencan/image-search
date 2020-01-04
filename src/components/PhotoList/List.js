import React from 'react';
import './PhotoList.css';

export default ({data}) => {
  const onClick = (item) => {
    console.log(item);
  }
  return (
    <div className={'listWrapper'}>
      {data.map(item => {
        return (
          <div
            key={item.id}
            onClick={() => onClick(item)}
            className={'list-item'}
          >
            <img src={item.urls.small}  alt={item.alt_description}/>
          </div>
        )
      })}
    </div>
  );
};