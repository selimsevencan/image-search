import * as types from '../actions/types';

export const value = (state, { payload }) => ({
  ...state,
  value: payload.value,
});

const createReducer = handlers => (state, action) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }
  return handlers[action.type](state, action);
};

export default createReducer({
  [types.FILL_VALUE]: value,
  [types.SEARCH_VALUE]: value,
});