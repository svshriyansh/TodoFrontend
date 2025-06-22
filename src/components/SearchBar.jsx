import { useState } from "react";
//what is onAdd
export function SearchBar({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input.trim() !== "") {
      onAddTask(input);
      setInput("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new Task"
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
}
