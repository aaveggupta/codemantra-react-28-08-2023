import React from "react";
import "./TodoContainerComponent.css";
import TodoCardComponent from "../TodoCardComponent/TodoCardComponent";

const TodoContainerComponent = ({ todoList, setTodoList }) => {
  const deleteHandler = (id) => {
    setTodoList((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <section className="todocontainercomponent">
      {todoList?.map((task, index) => (
        <TodoCardComponent
          key={index}
          id={task.id}
          content={task.task}
          date={task.date}
          deleteHandler={deleteHandler}
        />
      ))}
    </section>
  );
};

export default TodoContainerComponent;
