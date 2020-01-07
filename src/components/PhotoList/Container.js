import React, { useContext, useEffect } from 'react';
import { Context } from '../../Store';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import Loading from '../../components/Loading';
import Header from '../Header';
import List from './List';
import Pagination from '../../common/view/Pagination';
import EmptyState from '../../common/view/EmptyState';
import { getData } from '../../utils.js';

const PhotoListContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background: white;
  text-align: center;
`;

export default () => {
  const [state, dispatch] = useContext(Context);
  const { query, collection } = useParams();
  const {
    data, 
    isApiRequested, 
    isLoading, 
    total,
    page,
  } = state;
  const onChange = (i) => {
    dispatch({type: 'SET_PAGE',  payload: i });
    getData(state, i, dispatch);
  }

  useEffect(() => {
    if (!isApiRequested) {
      dispatch({type: 'FILL_INPUT',  payload: query });
      dispatch({type: 'SELECT_COLLECTION',  payload: collection });
      getData({searchTerm: query, collection}, 1, dispatch);
    }
  }, [collection, dispatch, isApiRequested, query]);

  return (
    <>
      <Loading />
      <Header />
      <PhotoListContainer>
        {
          data.length > 0 &&
          <>
            <List
              data={data}
              query={query}
              collection={collection}
            /> 
            <Pagination 
              total={total}
              activePage={page}
              onChange={onChange}
            />
          </>
        }
        { 
        !data.length && isApiRequested && !isLoading && 
        <EmptyState>
          There is no data with these conditions.
        </EmptyState>
        }
      </PhotoListContainer>
    </>
  );
};