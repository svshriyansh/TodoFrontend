import { SearchBar } from "./components/SearchBar";
import "./App.css";
import { DisplayTasks } from "./components/DisplayTasks";
import { addTask } from "./services/todoServices";
import { useEffect, useState } from "react";
import { fetchTasks } from "./services/todoServices";

function App() {
  const [tasks, setTasks] = useState([]);
  const loadTask = () => {
    fetchTasks()
      .then((data) => setTasks(data))
      .catch((error) => console.log("Error fetching tasks:", error));
  };

  useEffect(() => {
    loadTask();
  }, []);

  const handAddTasks = async (taskText) => {
    await addTask(taskText);
    loadTask();
  };
  return (
    <>
      <SearchBar onAddTask={handAddTasks} />
      <DisplayTasks tasks={tasks} onTaskModified={loadTask} />
    </>
  );
}

export default App;
