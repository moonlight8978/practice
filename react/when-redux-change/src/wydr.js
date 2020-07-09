import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  const ReactRedux = require("react-redux/lib");

  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [
      [ReactRedux, "useSelector"],
      [React, "useMemo"],
    ],
  });
}
