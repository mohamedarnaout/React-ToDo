import React, { useRef, useState } from "react";
import "./List.css";
import Tasks from "../Tasks/tasks";

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
    if (!inputValue) {
      alert("please write a task");
    } else {
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
      <Tasks arr={tasks} />
    </div>
  );
}

export default List;
