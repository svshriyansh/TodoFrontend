import { UtilityDisplay } from "./UtilsDisplay";
import { SearchBar } from "./SearchBar";
import { Tasks } from "./Tasks";
import { useTasks } from "../utils/useTasks";

export function DisplayTasks() {
  const { tasks, updateTask, addTask } = useTasks();
  console.log("Tasks are", tasks);
  return (
    <div className="flex h-full w-full bg-gray-400">
      <UtilityDisplay />
      <div className="w-1/3  ">
        <SearchBar addTask={addTask} />
        <ul>
          {tasks?.map((task) => (
            <li key={task?.id}>
              <Tasks taskObj={task} updateTask={updateTask} />
            </li>
          ))}
        </ul>
      </div>
      <UtilityDisplay />
    </div>
  );
}
