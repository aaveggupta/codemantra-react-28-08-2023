import React, { useState } from "react";
import "./SearchComponent.css";
import { getWeather } from "../../utils/weather-api";

const SearchComponent = ({ setPlace }) => {
  const [value, setValue] = useState("");

  return (
    <header className="searchComponent">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await getWeather(value);
          console.log(result);
          setPlace({
            name: result?.data?.name,
            temp: result?.data?.main?.temp,
            tempMax: result?.data?.main?.temp_max,
            tempMin: result?.data?.main?.temp_min,
          });
          setValue("");
        }}
      >
        <input
          type="text"
          placeholder="Enter the name of place"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </header>
  );
};

export default SearchComponent;
