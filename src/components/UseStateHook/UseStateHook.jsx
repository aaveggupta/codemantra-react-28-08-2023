import React, { useState } from "react";
import "./UseStateHook.css";

const UseStateHook = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const buttonHandler = () => {
    setIsDarkMode((prevVal) => !prevVal);
  };

  return (
    <div
      className="usestatehook"
      style={{ backgroundColor: isDarkMode ? "black" : "white" }}
    >
      <button onClick={buttonHandler}>
        {isDarkMode ? "White Mode" : "Black Mode"}
      </button>
    </div>
  );
};

export default UseStateHook;
