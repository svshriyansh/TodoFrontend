import { useState } from "react";

export function SearchBar({ addTask }) {
  const [data, setData] = useState("");

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      if (data !== "") {
        await addTask(data);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder=" + Add New Task"
        onKeyDown={handleKeyPress}
        className="rounded-lg"
      />
    </div>
  );
}
