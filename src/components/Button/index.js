import React, { useContext } from 'react';
import { Context } from '../../Store';
import { getData } from '../../common/view/utils/utils';

import './Button.css';

export default () => {
  const [{ searchTerm, collection, isLoading, isApiRequested, page }, dispatch] = useContext(Context);
  const onClick = () => {
    getData(searchTerm, collection, page, dispatch);
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