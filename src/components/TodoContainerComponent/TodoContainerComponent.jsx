import React from "react";
import "./TodoContainerComponent.css";
import TodoCardComponent from "../TodoCardComponent/TodoCardComponent";

const TodoContainerComponent = () => {
  return (
    <section className="todocontainercomponent">
      <TodoCardComponent />
      <TodoCardComponent />
      <TodoCardComponent />
      <TodoCardComponent />
      <TodoCardComponent />
      <TodoCardComponent />
      <TodoCardComponent />
      <TodoCardComponent />
    </section>
  );
};

export default TodoContainerComponent;
