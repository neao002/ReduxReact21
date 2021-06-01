// we will mix all our reducers in here

import { combineReducers } from "redux";
import { productReducer } from "./productReducers";

const reducers = combineReducers({
  allProducts: productReducer,
});

export default reducers;
