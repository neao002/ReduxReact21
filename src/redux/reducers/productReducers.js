//always take initial state and
import ActionTypes from "../contans/actions-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmer",
    },
  ],
};

export const productReducer = (state, action) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
