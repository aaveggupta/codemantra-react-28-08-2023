import React, { useState } from "react";
import "./SearchComponent.css";

const SearchComponent = ({ setPlace }) => {
  const [value, setValue] = useState("");

  return (
    <header className="searchComponent">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPlace(value);
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
