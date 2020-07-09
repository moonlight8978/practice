import { createStore } from "redux";
import lodash from "lodash";

import actions from "./actions";

const initialState = {
  productStorage: {},
  productDisplay: [],
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.types.SET_PRODUCTS_STORAGE:
      return {
        ...state,
        productStorage: {
          ...state.productStorage,
          ...lodash.keyBy(action.payload, "id"),
        },
      };

    case actions.types.SET_PRODUCT_DISPLAY:
      return {
        ...state,
        productDisplay: action.payload,
      };

    case actions.types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
