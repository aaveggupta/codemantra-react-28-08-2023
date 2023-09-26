import React, { useState } from "react";
import "./CelciusPage.css";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import ResultComponent from "../../components/ResultComponent/ResultComponent";
import { useNavigate } from "react-router-dom";

function CelciusPage() {
  const [place, setPlace] = useState({
    name: "",
    temp: "",
    tempMax: "",
    tempMin: "",
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Back</button>
      <SearchComponent setPlace={setPlace} />
      <ResultComponent place={place} celcius={true} />
    </div>
  );
}

export default CelciusPage;
