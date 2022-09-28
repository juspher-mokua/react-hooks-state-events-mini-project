import React,{ useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {

  // updates tasks in Task comp.
  const [tasks, setTasks] = useState(TASKS);

  //Remove task
  function removeTask(removedTask) {
    setTasks(tasks.filter((task) => task.text !== removedTask))
  }

  //updates selected categories
  const [category, setCategory] = useState('All');
  const tasksToDisplay = tasks.filter((task) => task.category === category || category === "All")

  //Add new task 
  function addNewTask (newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={ CATEGORIES } 
      selectedCat={ category} 
      onSelect ={setCategory} />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={addNewTask}
      />
      <TaskList 
      tasks={tasksToDisplay} 
      onRemoveTask={removeTask} 
      />
    </div>
  );
}

export default App;
