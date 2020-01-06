import axios from 'axios';

export const getData = (state, page, dispatch) => {
  const {
    searchTerm, 
    collection,
  } = state;
  const url = `${process.env.REACT_APP_API_URL}search/photos?per_page=20&page=${page}&query=${searchTerm}&collections=${collection}&client_id=${process.env.REACT_APP_API_KEY}`;
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