import React, { useState } from "react";
import "./task.css";

function Task(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  const listtasks = props.arr.map((task) => (
    <div className="flex task">
      <button
        className={isActive ? "checked" : "check"}
        onClick={handleClick}
      ></button>
      <h4 className="task-text"> {task}</h4>
    </div>
  ));
  return <div className="tasks">{listtasks}</div>;
}

export default Task;
