import React, { useCallback, useState, memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import actions from "./actions";

function FilterTable() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ page: 1 });

  const handleChange = useCallback(
    (event) => {
      setFilter({
        [event.target.name]: event.target.value,
      });
    },
    [setFilter]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      dispatch({ type: actions.types.SET_CURRENT_PAGE, payload: filter.page });
    },
    [dispatch]
  );

  useEffect(() => {
    console.log("Filter table render");
  });

  useEffect(() => {
    console.log("dispatch changes");
  }, [dispatch]);

  return (
    <section>
      <h3>Filter</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="page">Page: </label>
        <input
          name="page"
          value={filter.page}
          id="page"
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export default memo(FilterTable);
