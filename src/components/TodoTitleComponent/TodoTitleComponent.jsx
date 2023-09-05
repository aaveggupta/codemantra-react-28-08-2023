import React from "react";
import "./TodoTitleComponent.css";

const TodoTitleComponent = () => {
  return (
    <section className="todotitlecomponent">
      <h1>Todo List</h1>
      <form action="">
        <input type="text" placeholder="What on your mind?" />
      </form>
    </section>
  );
};

export default TodoTitleComponent;
