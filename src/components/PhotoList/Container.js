import React, { useContext, useState } from 'react';
import { Context } from '../../Store';

import List from './List';
import Pagination from '../../common/view/Pagination';
import EmptyState from '../../common/view/EmptyState';
import { getData } from '../../common/view/utils/utils.js'

import './PhotoList.css';

export default () => {
  const [{data, isApiRequested, isLoading, totalPage, searchTerm, collection}, dispatch] = useContext(Context);

  const [activePage, setPage] = useState(1);

  const onChange = (i) => {
    setPage(i);
    getData(searchTerm, collection, i, dispatch);
  }
  
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
            activePage={activePage}
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