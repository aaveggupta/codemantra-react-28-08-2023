import React, { useState } from "react";
import "./App.css";
import { REQUESTS, getContent } from "./utils/api-requests";

function App() {
  const [count, setCount] = useState(0);

  const result = getContent(REQUESTS.COMEDY_MOVIES);
  console.log(result);

  console.log(result);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>INCREASE</button>
    </div>
  );
}

export default App;
