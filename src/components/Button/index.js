import React, { useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Store';
import './Button.css';
const key ='d08592935389a4cd4a344343321866066191ef7d7729b54bc8929b1e9b5b8724';

export default () => {
  const [{ searchTerm, collection, isLoading, isApiRequested }, dispatch] = useContext(Context);
  const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&collections=${collection}&client_id=${key}`;
  const onClick = () => {
    dispatch({type: 'SEARCH_DATA'});
    try {
      axios.get(url)
      .then(response => {
          const data = response.data.results;
          dispatch({ type: 'SEARCH_SUCCESS', payload: data });
      })
    } catch (error) {
      dispatch({ type: 'SEARCH_ERROR', payload: error });
    }
  };
  const isDisabled = !Boolean(searchTerm) || isLoading;
  return (
    <div className={'buttonWrapper'}>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={isApiRequested ? 'button' : 'button margin-top'}
      >
        SEARCH
      </button>
    </div>
  );
};