import React, { useState } from "react";
import "./App.css";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import ResultComponent from "./components/ResultComponent/ResultComponent";

function App() {
  const [place, setPlace] = useState({
    name: "",
    temp: "",
    tempMax: "",
    tempMin: "",
  });

  return (
    <div className="App">
      <SearchComponent setPlace={setPlace} />
      <ResultComponent place={place} />
    </div>
  );
}

export default App;
