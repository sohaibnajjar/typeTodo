import trash from "../imgs/trash.png";
import * as React from "react";
import { Todo } from "../App";

type ToDoProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onChangeDone: (id: number) => void;
};

export default function ToDo({ todo, onDelete, onChangeDone }: ToDoProps) {
  return (
    <div className="myDiv">
      <h2>Task number: {todo.number}</h2>
      <h2>task: {todo.task}</h2>
      <h2 style={{ color: todo.done ? "green" : "red" }}>
        <span onClick={() => onChangeDone(todo.id)}>
          {todo.done ? "✔" : "X"}
        </span>
      </h2>
      <div>
        <img
          onClick={() => onDelete(todo.id)}
          src={trash}
          style={{}}
          height="28px"
          alt="trash"
        ></img>
      </div>
    </div>
  );
}
