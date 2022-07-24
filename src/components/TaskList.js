import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
  
  return (
    <div className="tasks">
      {tasks.map(task=> <Task text={task.text} key={task.text} category={task.category} handleDelete={handleDelete}/>)}
    </div>
  );
}

export default TaskList;
