import React, { useState } from "react";
import check from "./60731.png";
function Task(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  return (
    <div>
      <div className="flex task">
        <button
          className={isActive ? "checked" : "check"}
          onClick={handleClick}
        >
          {isActive ? <img src={check} alt="" className="checkmark" /> : ""}
        </button>
        <h4 className="task-text"> {props.name}</h4>
      </div>
    </div>
  );
}

export default Task;
