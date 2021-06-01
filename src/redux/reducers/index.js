// we will mix all our reducers in here

import { combineRedcuers } from "redux";
import { productReducer } from "./productReducers";

const reducers = combineRedcuers;
// will take any key that you create, allproducts is my initial state created in productReducers
{
  allProducts: productReducer;
}
