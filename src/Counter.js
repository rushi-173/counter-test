import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStartPauseClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleResetClick = () => {
    setCounter(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleStartPauseClick}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default Counter;
