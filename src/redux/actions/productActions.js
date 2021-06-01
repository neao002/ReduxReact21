import { ActionTypes } from "../contans/actions-types";
//Set
export const setProducts = (products) => {
  return {
    // my actions
    type: ActionTypes.SET_PRODUCTS,
    //data
    payload: products,
  };
};
//select

export const selectedProducts = (product) => {
  return {
    // my actions
    type: ActionTypes.SELECTED_PRODUCTS,
    //data
    payload: product,
  };
};
