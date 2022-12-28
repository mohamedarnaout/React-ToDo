import React, { useRef, useState } from "react";
import "./List.css";

function List() {
  const [tasks, settasks] = useState([
    "Clean the dishes",
    "Wash the car",
    "shove the snow",
  ]);
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    settasks([...tasks, inputValue]);
    console.log(tasks);
    inputRef.current.value = "";
  };
  const listtasks = tasks.map((task, i) => (
    <li>
      {i + 1}. {task}
    </li>
  ));
  return (
    <div className="list">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Write a task"
          className="text"
          ref={inputRef}
        />
        <input type="submit" value="+" className="button" />
      </form>
      <ol className="tasks">{listtasks}</ol>
    </div>
  );
}

export default List;
