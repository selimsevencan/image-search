import React, { useContext } from 'react';
import { Context } from '../../Store';

import List from './List';
import Pagination from '../../common/view/Pagination';
import EmptyState from '../../common/view/EmptyState';
import { getData } from '../../common/view/utils/utils.js'

import './PhotoList.css';

export default () => {
  const [state, dispatch] = useContext(Context);
  const onChange = (i) => {
    getData(state, i, dispatch);
    dispatch({type: 'SET_PAGE',  payload: i });
  }

  const {
    data, 
    isApiRequested, 
    isLoading, 
    totalPage,
    page,
  } = state;
  if (!isApiRequested) return null;
  return (
    <div className={'container'}>
      {
        data.length > 0 &&
        <>
          <List 
            data={data}
            totalPage={totalPage}
          /> 
          <Pagination 
            totalPage={totalPage}
            activePage={page}
            onChange={onChange}
          />
        </>
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