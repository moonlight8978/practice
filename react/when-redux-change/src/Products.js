import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";

import selectors from "./selectors";

function Products() {
  const products = useSelector(selectors.products);

  useEffect(() => {
    console.log("Products");
  });

  useEffect(() => {
    console.log(
      "Products array changes when product storage changes, changes of currentPage does not affect it"
    );
  }, [products]);

  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.id}</span>
          <span>{product.name}</span>
        </div>
      ))}
    </section>
  );
}

export default memo(Products);
