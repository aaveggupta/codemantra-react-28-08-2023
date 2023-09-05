import React from "react";
import "./TodoCardComponent.css";

import TrashIcon from "../../assets/icons/trash.png";

const TodoCardComponent = ({ id, content, date, deleteHandler }) => {
  return (
    <div className="todocardcomponent">
      <div>
        <h2>{content}</h2>
        <p>{date}</p>
      </div>
      <img src={TrashIcon} alt="trash-icon" onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default TodoCardComponent;
