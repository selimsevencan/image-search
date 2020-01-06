import React, { useContext } from 'react';
import { Context } from '../../Store';
import styled from 'styled-components';
import List from './List';
import Pagination from '../../common/view/Pagination';
import EmptyState from '../../common/view/EmptyState';
import { getData } from '../../utils.js';

const PhotoListContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background: white;
`;

export default () => {
  const [state, dispatch] = useContext(Context);
  const onChange = (i) => {
    dispatch({type: 'SET_PAGE',  payload: i });
    getData(state, i, dispatch);
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
    <PhotoListContainer>
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
    </PhotoListContainer>
  );
};