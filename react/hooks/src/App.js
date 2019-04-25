import React, { useState, useEffect } from "react";

function useTimeCounter() {
  const [currentTime, setCurrentTime] = useState(new Date());

  console.log(currentTime);

  useEffect(() => {
    const handleTimeChange = () => {
      setCurrentTime(new Date(currentTime.getTime() + 3000));
      console.log("rolling in the deep");
    };

    const interval = setInterval(handleTimeChange, 3000);

    return () => {
      interval && clearInterval(interval);
    };
  }, []);

  return currentTime;
}

function Time() {
  const currentTime = useTimeCounter();

  return (
    <div>
      <p>Current time is {currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

function useTestHook() {
  useEffect(() => {
    console.log("setup hook");
    return () => console.log("clean hook");
  }, []);
}

function TestHook(props) {
  useTestHook();

  return <div>Testing hooks {props.count}</div>;
}

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <TestHook count={count} />
    </div>
  );
}

export default App;
