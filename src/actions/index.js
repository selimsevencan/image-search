import {
  SEARCH_VALUE,
  FILL_VALUE,
} from './types';

export const fillValue = value => {
  return ({ type: FILL_VALUE, payload: { value } })
};

export const searchValue = value => {
  const url = `${process.env.API_BASE}/search/photos?query=${value}`;
  console.log('url', url);
  return async function(dispatch) {
    dispatch({
      type: SEARCH_VALUE,
      payload: {
        data: [],
        loading: true,
      }
    });
    try {
      const response = await fetch(url);
      const repo = await response.json();

      dispatch({
        type: SEARCH_VALUE,
        payload: {
          data: repo,
          loading: false,
        }
      });
    } catch (error) {
      dispatch({
        type: SEARCH_VALUE,
        payload: {
          error
        }
      });
    }
  };
  };
