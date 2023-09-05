import React, { useState } from "react";
import "./TodoTitleComponent.css";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const TodoTitleComponent = ({ setTodoList }) => {
  const [task, setTask] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setTodoList((prev) => [
      {
        id: uuidv4(),
        task: task,
        date: moment(new Date()).format("Do MMMM, YYYY"),
      },
      ...prev,
    ]);
    setTask("");
  };

  return (
    <section className="todotitlecomponent">
      <h1>Todo List</h1>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="What on your mind?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
    </section>
  );
};

export default TodoTitleComponent;
