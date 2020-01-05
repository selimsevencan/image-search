import React, { useContext } from 'react';
import { Context } from '../../Store';
import { getData } from '../../common/view/utils/utils';

import './Button.css';

export default () => {
  const [state, dispatch] = useContext(Context);
  const { 
    searchTerm,
    isLoading, 
    isApiRequested,
  } = state;
  const onClick = () => {
    getData(state, 1, dispatch);
    dispatch({type: 'SET_PAGE',  payload: 1 });
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