import { useState } from "react";
import { deleteTask, updateTask } from "../services/todoServices";

export function Tasks({ taskObj, onTaskModified }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(taskObj.task);
  const showSaveButton = editedText !== taskObj.text;
  const handleDelete = async () => {
    try {
      await deleteTask(taskObj.id);
      onTaskModified();
    } catch (error) {
      console.error("Failed to delete ", error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleToggleComplete = async () => {
    try {
      const updated = {
        ...taskObj,
        completed: !taskObj.completed,
      };
      await updateTask(taskObj.id, updated);
      onTaskModified();
    } catch (error) {
      console.error("Failed to update:", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedText(taskObj.task);
  };

  const handleSaveClick = async () => {
    try {
      const updated = { ...taskObj, task: editedText };
      await updateTask(taskObj.id, updated);
      onTaskModified();
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update task text:", error);
    }
  };
  const handleInputChange = async (e) => {
    setEditedText(e.target.value);
  };
  return (
    <div>
      <div>
        {isEditing ? (
          <>
            <input type="text" value={editedText} onChange={handleInputChange}>
              {showSaveButton && (
                <button onClick={handleSaveClick}>Save</button>
              )}
            </input>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            {taskObj.task}
            <button onClick={handleEditClick}>Edit </button>
          </>
        )}
        <button onClick={handleDelete}>̦❌</button>
        <button onClick={handleToggleComplete}>
          {taskObj.completed ? "✅" : "🕥"}
        </button>
      </div>
    </div>
  );
}
