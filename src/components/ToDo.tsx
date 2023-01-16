import trash from "../imgs/trash.png";
import '../App.css';
import * as React from 'react';

type ToDoProps = {
  todo: { id: number, task: string,done:boolean }
  filtertext: string
  toggle: boolean
}
export default function ToDo ({todo, filtertext, toggle}: ToDoProps){
  const handleDelete = (id:number) => {
 
    let newtodo = [];
    let ids = parseInt(localStorage.getItem("ids")!) - 1;
    let displaytodo = JSON.parse(localStorage.getItem("todo")!);
    newtodo = displaytodo.slice(0, id - 1);
    console.log(newtodo);

    for (let i = id - 1; i < ids; i++) {
      console.log(displaytodo[i]);
      let str = displaytodo[i + 1];
      str.id = i + 1;
      newtodo.push(str);
    }
    console.log(newtodo);

    localStorage.setItem("todo", JSON.stringify(newtodo));

    localStorage.setItem("ids", ids.toString());
    window.location.reload();
};
const handleToggle = (id:number) => {
              let displaytodo = JSON.parse(localStorage.getItem("todo")!);
              if (displaytodo[id - 1].done) displaytodo[id - 1].done = false;
              else displaytodo[id - 1].done = true;
  
              localStorage.setItem("todo", JSON.stringify(displaytodo));
              window.location.reload();
};
    return (
      <div className="myDiv" key={todo.id}>
        <h2>Task number: {todo.id}</h2>
        <h2>task: {todo.task}</h2>
        <h2 style={{ color: todo.done ? "green" : "red" }}>
          <span
                         onClick={() => handleToggle(todo.id)}

          >
            {" "}
            {todo.done ? "✔" : "X"}{" "}
          </span>
  
          <img
             onClick={() => handleDelete(todo.id)}
            src={trash}
            style={{  }}
            height= "28px"
          ></img>
        </h2>
        <h2></h2>
        <hr />
      </div>
    );
  }
