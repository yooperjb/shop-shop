import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// creates a new Context object to hold the global state data
const StoreContext = createContext();
// React component that wraps application in to make state data a prop available to all other components
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    // 
    return <Provider value={[state, dispatch]} {...props} />;
  };

  const useStoreContext = () => {
      return useContext(StoreContext);
  };

  export { StoreProvider, useStoreContext };