import "./App.css";
import { DisplayTasks } from "./components/DisplayTasks";
import { addTask } from "./services/todoServices";
import { useEffect, useState } from "react";
import { fetchTasks } from "./services/todoServices";

function App() {
  return (
    <>
      <DisplayTasks />
    </>
  );
}

export default App;
