import {
  FILL_INPUT,
  SEARCH_DATA,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SELECT_COLLECTION,
  SET_PAGE,
} from './actions';

export const initialState = {
  data: [],
  error: null,
  searchTerm: '',
  isLoading: false,
  isApiRequested: false,
  collection: 'nature',
  page: 1,
};

export const reducer = (state = initialState,  action) => {
  switch (action.type) {
    case FILL_INPUT:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
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
        isApiRequested: true,
        data: action.payload.data.results,
        total: action.payload.data.total,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        isApiRequested: true,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;