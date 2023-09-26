import React from "react";
import "./ResultComponent.css";

const ResultComponent = ({ place, celcius }) => {
  const resultTemperate = celcius ? place.temp - 273.15 : place.temp;

  return (
    <section className="resultComponent">
      {place.name !== "" && place.temp !== "" && (
        <>
          <h1>
            Temperature in <span>{place.name}</span> is{" "}
            <span>
              {resultTemperate.toFixed(2)}
              {celcius ? " °C" : " Kelvin"}
            </span>
          </h1>
        </>
      )}
    </section>
  );
};

export default ResultComponent;
