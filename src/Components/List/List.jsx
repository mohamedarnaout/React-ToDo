import React, { useRef, useState } from "react";
import "./List.css";
import Task from "../Task/task";

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
    if (inputValue) {
      settasks([...tasks, inputValue]);
      console.log(tasks);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="list">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Write a task"
          className="text"
          ref={inputRef}
        />
        <input type="submit" value="+" className="button" />
      </form>
      <Task arr={tasks} />
    </div>
  );
}

export default List;
