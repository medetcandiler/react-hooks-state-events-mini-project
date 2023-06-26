import React from "react";

function Task({ task, onDelete, category, text}) {
  const handleDeleteClick = () => {
    onDelete(task);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;
