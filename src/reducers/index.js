import {
  FILL_VALUE,
  SEARCH_VALUE,
} from '../actions/types';

const initialState = {
  data: [],
  value: '',
  isLoading: false,
};
// export const value = (state, { payload }) => ({
//   ...state,
//   value: payload.value,
// });

// const createReducer = handlers => (state, action) => {
//   if (!handlers.hasOwnProperty(action.type)) {
//     return state;
//   }
//   return handlers[action.type](state, action);
// };

// export default createReducer({
//   [types.FILL_VALUE]: value,
//   [types.SEARCH_VALUE]: value,
// });

export default function reducer(state = initialState, action) {
  console.log('action', action.type);
  switch (action.type) {
    case FILL_VALUE: {
      return {
        ...state,
        value: action.payload.value,
      };
    }

    case SEARCH_VALUE: {
      return {
        ...state,
        isLoading: action.payload.loading,
        data: action.payload.data,
      };
    }

    default:
      return state;
  }
}