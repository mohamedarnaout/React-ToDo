import React from "react";
import Task from "../Task/task";
import "./task.css";

function Tasks(props) {
  const listTasks = props.arr.map((task) => <Task name={task} />);
  return <div className="tasks">{listTasks}</div>;
}

export default Tasks;
