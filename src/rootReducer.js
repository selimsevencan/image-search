import {
  FILL_INPUT,
  SEARCH_DATA,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SELECT_COLLECTION,
  CHECK_REQUEST,
  SET_PAGE,
} from './actions';

export const initialState = {
  data: [],
  error: null,
  searchTerm: '',
  isLoading: false,
  isApiRequested: false,
  collection: 'featured',
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
    case CHECK_REQUEST:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.results,
        totalPage: action.payload.data.total_pages,
        [action.payload.apiReuqestName]: action.payload.data.results,
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