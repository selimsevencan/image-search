import axios from 'axios';

const key ='d08592935389a4cd4a344343321866066191ef7d7729b54bc8929b1e9b5b8724';

export const getData = (searchTerm, collection, page, dispatch) => {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchTerm}&collections=${collection}&client_id=${key}`;
  dispatch({type: 'SEARCH_DATA'});
  try {
    axios.get(url)
    .then(response => {
        const data = response.data;
        dispatch({ type: 'SEARCH_SUCCESS', payload: data });
    })
  } catch (error) {
    dispatch({ type: 'SEARCH_ERROR', payload: error });
  }
}
