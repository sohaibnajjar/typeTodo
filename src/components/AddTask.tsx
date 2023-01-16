import '../App.css';
import * as React from 'react';
import { useState } from "react";
var todo:{ id: number; task: string,done:boolean }[] = [];
export default function AddTask() {
    const [newtask, settask] = useState("");
    const storedtodo:{ id: number; task: string,done:boolean }[] = JSON.parse(localStorage.getItem("todo")!);
    todo = storedtodo.slice(0);
    const handle_add_task = () => {
      let new_id:number = parseInt(localStorage.getItem("ids")!) + 1;
      todo.push({ id: new_id, task: newtask, done: false });
      localStorage.setItem("todo", JSON.stringify(todo));
  
      localStorage.setItem("ids", new_id.toString());
      window.location.reload();
    };
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                {" "}
                <label>Task</label> &nbsp;
              </td>
              <td>
                <input
                  type="text"
                  id="taskName"
                  name="task name"
                  value={newtask}
                  onChange={(e) => settask(e.target.value)}
                />
              </td>
              <td>
                &emsp;&nbsp;
                <button className="addButton" onClick={handle_add_task}>
                  {" "}
                  Add{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }