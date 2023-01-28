import * as React from "react";
import { Todo } from "../App";

export default function Footer({ storedTodos }: { storedTodos: Todo[] }) {
  const todosNumber = storedTodos.length;
  const doneTodo = storedTodos.filter((todo) => todo.done).length;
  return (
    <div style={{ color: "white", fontSize: "20px" }} className="componant">
      Number of to todos in the list= {todosNumber} ---- Number of done to dos=
      {doneTodo} ---- Number of to be done to dos= {todosNumber - doneTodo}
    </div>
  );
}
