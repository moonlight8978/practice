import React, { useCallback, useState, memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import actions from "./actions";

function AddProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ id: "", name: "" });

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setProduct((product) => ({
        ...product,
        [name]: value,
      }));
    },
    [setProduct]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      dispatch({
        type: actions.types.SET_PRODUCTS_STORAGE,
        payload: [{ ...product, id: parseInt(product.id) }],
      });
    },
    [dispatch]
  );

  useEffect(() => {
    console.log("AddProduct renders");
  });

  return (
    <section>
      <h3>Add Product</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID: </label>
        <input name="id" value={product.id} id="id" onChange={handleChange} />

        <label htmlFor="name">Name: </label>
        <input
          name="name"
          value={product.name}
          id="name"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default memo(AddProduct);
