import React, { memo } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/teachers">Teachers</Link>
      <Link to="/students">Students</Link>
    </div>
  );
}

export default memo(Home);
