import { createSelector } from "reselect";

const screenStateSelector = (state) => state;

const currentPageSelector = createSelector(
  screenStateSelector,
  (state) => state.currentPage
);

const productStorageSelector = createSelector(
  screenStateSelector,
  (state) => state.productStorage
);

const productDisplaySelector = createSelector(
  screenStateSelector,
  currentPageSelector,
  (state, currentPage) => state.productDisplay
);

const productsSelector = createSelector(
  productStorageSelector,
  productDisplaySelector,
  (storage, ids) => ids.map((id) => storage[id] || {})
);

export default {
  products: productsSelector,
};
