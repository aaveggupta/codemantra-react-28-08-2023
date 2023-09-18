import React from "react";
import "./ResultComponent.css";

const ResultComponent = ({ place }) => {
  return (
    <section className="resultComponent">
      {place !== "" && (
        <h1>
          Temperature in <span>{place}</span> is <span>34°C</span>
        </h1>
      )}
    </section>
  );
};

export default ResultComponent;
