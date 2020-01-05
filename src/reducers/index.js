import {
  FILL_INPUT,
  SEARCH_DATA,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SELECT_COLLECTION,
} from '../actions';

const reducer = (state,  action) => {
  switch (action.type) {
    case FILL_INPUT:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SELECT_COLLECTION:
      return {
        ...state,
        collection: action.payload,
      };
    case SEARCH_DATA:
      return {
        ...state,
        isApiRequested: true,
        isLoading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.results,
        totalPage: action.payload.total_pages,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;