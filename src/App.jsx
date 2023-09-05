import React, { useState } from "react";
import "./App.css";
import TodoTitleComponent from "./components/TodoTitleComponent/TodoTitleComponent";
import TodoContainerComponent from "./components/TodoContainerComponent/TodoContainerComponent";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <TodoTitleComponent todoList={todoList} setTodoList={setTodoList} />
      <TodoContainerComponent todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
