import * as types from './types';

export const fillValue = value => {
  return ({ type: types.FILL_VALUE, payload: { value } })
};

export const searchValue = value => {
  const url = `${process.env.API_BASE}/search/photos?query=${value}`;
  console.log('url', url);
  return async function(dispatch) {
    dispatch({
      type: types.SEARCH_VALUE,
      payload: {value}
    });
  };
  // return ({ type: types.SEARCH_VALUE, payload: { value } })
};
