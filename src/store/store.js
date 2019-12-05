import React, { useReducer, createContext, useEffect } from 'react';
import { data } from '../data/data';

//getdata from local storage
const getdata = () => {
  const locdata = localStorage.getItem('cartdata');
  return locdata ? JSON.parse(locdata) : [];
};

//initialize the State
const initialState = {
  category: ['All', 'Watersports', 'Soccer', 'Chess'],
  data,
  cart: getdata(),
  selectedCategory: 'All'
};

//using Context api to create provider
const store = createContext();
const { Provider } = store;

//funtion to wrap around app.js in index.js to pass state to all children
function Dataprovider({ children }) {
  //reducer..
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'Change Category':
        return { ...state, selectedCategory: action.payload };
      case 'ADD':
        return { ...state, cart: [...state.cart, action.payload] };
      case 'Increment Count':
        return {
          ...state,
          cart: state.cart.map(c =>
            c.id === action.payload.id ? { ...action.payload } : c
          )
        };
      case 'Remove item from cart':
        return {
          ...state,
          cart: state.cart.filter(c => c.id !== action.payload.id)
        };
      default:
        return state;
    }
  }, initialState);

  //saving data in local storage whenever there is change in cart only
  useEffect(() => {
    localStorage.setItem('cartdata', JSON.stringify(state.cart));
  }, [state.cart]);

  //returing a provider created from createContext with value returned by useReducer and wraping around all the children in index.js
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, Dataprovider };
