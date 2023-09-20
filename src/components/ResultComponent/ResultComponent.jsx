import React from "react";
import "./ResultComponent.css";

const ResultComponent = ({ place }) => {
  return (
    <section className="resultComponent">
      {place.name !== "" && place.temp !== "" && (
        <>
          <h1>
            Temperature in <span>{place.name}</span> is{" "}
            <span>{place.temp}°F</span>
          </h1>
        </>
      )}
    </section>
  );
};

export default ResultComponent;
