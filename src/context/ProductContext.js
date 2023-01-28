import React, { createContext, useEffect } from "react";
import { useReducer } from "react";
import { actionTypes } from "../state/ProductState/actionTypes";
import {
  initialState,
  productReducer,
} from "../state/ProductState/productReducer";

export const AllProductContext = createContext();

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  console.log(state);
  
  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
        console.log(err);
      });
  }, []);

  const value = {
    state,
    dispatch,
  };
  return (
    <AllProductContext.Provider value={value}>
      {children}
    </AllProductContext.Provider>
  );
};

export default ProductContext;
