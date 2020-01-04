import React, { useContext } from 'react';
import { Context } from '../../Store';
import List from './List';
import EmptyState from '../../common/view/EmptyState';
import './PhotoList.css';

export default () => {
  const [{data, isApiRequested, isLoading}] = useContext(Context);
  console.log('data', data);

  return (
    <div className={'container'}>
      {
        data.length > 0 &&
        <List 
          data={data}
        /> 
      }
      { 
       !data.length && isApiRequested && !isLoading && 
       <EmptyState>
        There is no data with these conditions. Please search with different conditions
      </EmptyState>
      }
    </div>
  );
};