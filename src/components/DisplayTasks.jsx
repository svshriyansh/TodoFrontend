import { Tasks } from "./Tasks";

export function DisplayTasks({ tasks, onTaskModified }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Tasks taskObj={task} onTaskModified={onTaskModified} />
          </li>
        ))}
      </ul>
    </div>
  );
}
