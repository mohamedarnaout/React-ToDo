import React, { useState } from "react";
import check from "./60731.png";
import trash from "./big-trash.png";
function Task(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <div>
      <div className="flex-end  task">
        <div className="flex">
          <button
            className={isActive ? "checked" : "check"}
            onClick={handleClick}
          >
            {isActive ? <img src={check} alt="" className="checkmark" /> : ""}
          </button>
          <h4 className="task-text"> {props.name}</h4>
        </div>

        <div>
          <button className="task-delete" onClick={props.delete}>
            <img src={trash} alt="" className="trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
