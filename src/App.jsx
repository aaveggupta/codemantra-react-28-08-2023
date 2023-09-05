import React from "react";
import "./App.css";
import TodoTitleComponent from "./components/TodoTitleComponent/TodoTitleComponent";
import TodoContainerComponent from "./components/TodoContainerComponent/TodoContainerComponent";

function App() {
  return (
    <div className="App">
      <TodoTitleComponent />
      <TodoContainerComponent />
    </div>
  );
}

export default App;
