import * as React from "react";
import { useState } from "react";

interface AddTaskProps {
  onAddTodo: (newTask: string) => void;
}
const AddTask: React.FC<AddTaskProps> = ({ onAddTodo }) => {
  const [task, setTask] = useState<string>("");

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleAddTask} style={{ display: "flex", gap: "10px" }}>
      <label>Task</label>
      <input
        type="text"
        id="taskName"
        name="task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="addButton">Add</button>
    </form>
  );
};

export default AddTask;
