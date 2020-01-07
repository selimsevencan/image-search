import axios from 'axios';

const localStorage = window.localStorage;

export const getData = (state, page, dispatch) => {
  const {
    searchTerm, 
    collection,
  } = state;
  const url = `${process.env.REACT_APP_API_URL}search/photos?per_page=20&page=${page}&query=${searchTerm}&collections=${collection}&client_id=${process.env.REACT_APP_API_KEY}`;
  const apiReuqestName = `${searchTerm}${collection}${page}`;
  const isRequested = checkRequest(apiReuqestName);
  if(isRequested) {
    const requestStorage = JSON.parse(localStorage.getItem('key')).data;
    dispatch({ type: 'SEARCH_SUCCESS', payload: {data: requestStorage }});
  } else {
    dispatch({type: 'SEARCH_DATA'});
    try {
      axios.get(url)
      .then(response => {
          const data = response.data;
          var object = {value: apiReuqestName, data: data}
          localStorage.setItem("key", JSON.stringify(object));
          dispatch({ type: 'SEARCH_SUCCESS', payload: {data}});
      })
    } catch (error) {
      dispatch({ type: 'SEARCH_ERROR', payload: error });
    }
  }
}

export const checkRequest = (apiReuqestName) => {
  const key = JSON.parse(localStorage.getItem('key')).value;
  if (apiReuqestName === key) {
    return true;
  }
  return false;
}