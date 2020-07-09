import React, { lazy, Suspense } from "react";
import Loading from "./loading";
import { Switch, Route } from "react-router-dom";

const Teachers = lazy(() => import("./teachers"));
const Home = lazy(() => import("./home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading.Skeleton />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teachers" component={Teachers} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
