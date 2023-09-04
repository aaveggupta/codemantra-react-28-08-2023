import React, { useState } from "react";
import "./UseStateHook.css";

const UseStateHook = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const bmi = weight / (height * height);
    setBMI(bmi.toFixed(2));
  };

  return (
    <div className="usestatehook">
      <form action="" onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Weigth (KG)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (M)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      {BMI && <h1>Your BMI is {BMI} kg/m^2</h1>}
    </div>
  );
};

export default UseStateHook;
