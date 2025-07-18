import { useState } from "react";
import { deleteTask, updateTask } from "../services/todoServices";

export function Tasks({ taskObj, updateTask }) {
  // const showSaveButton = editedText !== taskObj.text;
  // const handleDelete = async () => {
  //   deleteTask;
  // };

  // const handleCancelClick = () => {
  //   setIsEditing(false);
  // };

  const handleToggleComplete = async () => {
    try {
      const updated = {
        ...taskObj,
        completed: !taskObj.completed,
      };
      await updateTask(taskObj.id, updated);
    } catch (error) {
      console.error("Failed to update:", error);
    }
  };

  // const handleEditClick = () => {
  //   setIsEditing(true);
  //   setEditedText(taskObj.task);
  // };

  // const handleSaveClick = async () => {
  //   try {
  //     const updated = { ...taskObj, task: editedText };
  //     await updateTask(taskObj.id, updated);
  //     onTaskModified();
  //     setIsEditing(false);
  //   } catch (error) {
  //     console.error("Failed to update task text:", error);
  //   }
  // };
  // const handleInputChange = async (e) => {
  //   setEditedText(e.target.value);
  // };
  return (
    <div>
      <>
        {taskObj?.task}
        {/* <button onClick={handleEditClick}>Edit </button> */}
      </>

      {/* <button onClick={handleDelete}>̦❌</button> */}
      <button onClick={handleToggleComplete}>
        {taskObj?.completed ? "✅" : "🕥"}
      </button>
    </div>
  );
}
