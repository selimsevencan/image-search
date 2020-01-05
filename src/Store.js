import React, {createContext, useReducer} from "react";
import reducer from './reducers';

const initialState = {
    data: [],
    error: null,
    searchTerm: '',
    isLoading: false,
    isApiRequested: false,
    collection: 'featured',
    page: 1,
};

const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext(initialState);
export default Store;