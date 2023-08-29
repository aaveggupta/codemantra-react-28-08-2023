import React, { useState } from "react";
import "./UseStateHook.css";

const UseStateHook = () => {
  // usestate do cheeze return (array ki form mein kr rha) array
  // ka pehle -> var, array ka dusara > (fun, var ko change krne k kaam aaega)
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  console.log(count, "OUTSIDE");

  return (
    <div className="usestatehook">
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseStateHook;
