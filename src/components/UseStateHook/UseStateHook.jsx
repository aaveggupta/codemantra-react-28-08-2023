import React, { useState } from "react";
import "./UseStateHook.css";

const UseStateHook = () => {
  const [count, setCount] = useState(0); // [state, function - state modify]

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="useeffecthook">
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseStateHook;
