import React, { useEffect, useState } from "react";
import "./UseEffectHook.css";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // 1. screen par kuch bhi render ho to tumhe koi action perform krna hai
  useEffect(() => {
    console.log("screen rendered");
  });

  // 2. only when the component got rendered for the first time
  useEffect(() => {
    console.log("FIRST TIME RENDER");
  }, []);

  // 3. SCREEN PAR KUCH SPECEFIC CHEEZ RENDER HOTI HAI TO HI CHALE VARNA NA CHANGE
  useEffect(() => {
    console.log("COUNT1 AND COUNT 2 RENDERED");
  }, [count2, count]);

  return (
    <div>
      <h1>{count}</h1>
      <h2>{count2}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>INCREASE</button>
      <button onClick={() => setCount2((prev) => prev - 1)}>DECREASE</button>
    </div>
  );
};

export default UseEffectHook;
