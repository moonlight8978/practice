import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import actions from "./actions";
import FilterTable from "./FilterTable";
import Products from "./Products";
import AddProduct from "./AddProduct";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/MOCK_DATA.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: actions.types.SET_PRODUCTS_STORAGE, payload: data });
        dispatch({
          type: actions.types.SET_PRODUCT_DISPLAY,
          payload: data.map((product) => product.id),
        });
      });
  }, [dispatch]);

  return (
    <div className="App">
      <AddProduct />

      <FilterTable />

      <Products />
    </div>
  );
}

export default App;
