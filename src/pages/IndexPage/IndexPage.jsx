import React, { useState } from "react";
import "./IndexPage.css";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import ResultComponent from "../../components/ResultComponent/ResultComponent";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  const [place, setPlace] = useState({
    name: "",
    temp: "",
    tempMax: "",
    tempMin: "",
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/celcius");
  };

  return (
    <div className="App">
      <button onClick={handleClick}>celcius page</button>
      <SearchComponent setPlace={setPlace} />
      <ResultComponent place={place} />
    </div>
  );
}

export default IndexPage;
