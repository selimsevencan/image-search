import axios from 'axios';

const key ='d08592935389a4cd4a344343321866066191ef7d7729b54bc8929b1e9b5b8724';

export const getData = (state, page, dispatch) => {
  const {
    searchTerm, 
    collection,
  } = state;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchTerm}&collections=${collection}&client_id=${key}`;
  const apiReuqestName = `${searchTerm}${collection}${page}`;
  const isRequested = checkRequest(apiReuqestName, state);
  if(isRequested) {
    dispatch({ type: 'CHECK_REQUEST', payload: {data: state[apiReuqestName] }});
  } else {
    dispatch({type: 'SEARCH_DATA'});
    try {
      axios.get(url)
      .then(response => {
          const data = response.data;
          dispatch({ type: 'SEARCH_SUCCESS', payload: {data, apiReuqestName }});
      })
    } catch (error) {
      dispatch({ type: 'SEARCH_ERROR', payload: error });
    }
  }
}

export const checkRequest = (apiReuqestName, state) => {
  if (state[apiReuqestName]) {
    return true;
  }
  return false;
}