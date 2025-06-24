const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export async function addTask(taskText) {
  const todo = { task: taskText, completed: false };
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error("Failed to add Tasks");
    }

    const addedTodo = await response.json();
    return addedTodo;
  } catch (err) {
    console.error("Error while calling backend:", err);
    throw err;
  }
}

export async function fetchTasks() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return response.json();
}

export async function deleteTask(id) {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
}

export async function updateTask(id, updatedTask) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  return await response.json();
}
