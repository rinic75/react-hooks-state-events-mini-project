import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleDelete(text) {
    const filteredTasks = tasks.filter(task => task.text !== text)
    setTasks(filteredTasks)
  }

  const filteredTasks = tasks.filter(task => category === "All" || task.category === category)
  
  function handleNewTask(newTask) {
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCategory={category} onSelectCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES.filter(categ=>categ !== "All")} onTaskFormSubmit={handleNewTask}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
