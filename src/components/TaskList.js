import React from "react";
import { TASKS } from "../data"; // use the data modified in app.js not directly from data.js
import Task from "./Task";

function TaskList({ tasks, onRemoveTask}) {
  return (
    <div className="tasks">
      {   tasks.map((TASK) => 
        <Task 
          key={TASK.text} 
          text={TASK.text} 
          category={TASK.category} 
          onRemoveTask={onRemoveTask} 
        />
        )
      }
    </div>
  );
}

export default TaskList;
