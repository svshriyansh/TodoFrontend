import { useEffect, useState } from "react";
import { addTask, deleteTask, fetchTasks, updateTask } from "../services/todoServices";

export function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks().then(setTasks)
    }, [])


    const fetchAllTasks = async () => {
        try {
            const data = await fetchTasks();
            setTasks(data)
        } catch (error) {
            console.log("message : ", error)
        }

    }

    const updateTaskAndRefresh = async (id, updatedTask) => {
        await updateTask(id, updatedTask)
        await fetchAllTasks();
    }

    const addTaskAndRefresh = async (tasksData) => {
        await addTask(tasksData)
        await fetchAllTasks();
    }

    const deleteTaskAndRefresh = async (tasksId) => {
        await deleteTask(tasksId);
        await fetchAllTasks();
    }

    return { fetchAllTasks, addTask: addTaskAndRefresh, deleteTask: deleteTaskAndRefresh, updateTask: updateTaskAndRefresh, tasks }
}