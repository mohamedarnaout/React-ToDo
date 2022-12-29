import React from "react";
import Task from "../Task/task";
import "./task.css";

function Tasks(props) {
  const deleteClick = (e) => {
    e.target.parentNode.parentNode.parentNode.parentNode.style.display = "none";
  };
  const listTasks = props.arr.map((task) => (
    <Task name={task} delete={deleteClick} />
  ));
  return <div className="tasks">{listTasks}</div>;
}

export default Tasks;
