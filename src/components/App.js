import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleSelectCategory = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleDeleteTask = (task) => {
    setTasks(prev => prev.filter((prevTask) => prevTask !== task));
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  };

  const filtered = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filtered} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
