import React, { useState } from "react";

const ToDoItems = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    setIsCompleted(!isCompleted);
  };

  const textDecoration = isCompleted ? "line-through" : "none";

  return (
    <li onClick={handleClick} style={{ textDecoration }}>
      {props.text}
    </li>
  );
};

export default ToDoItems;
