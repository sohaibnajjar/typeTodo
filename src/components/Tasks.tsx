import * as React from 'react';
import { useState } from "react";
import ToDo from './ToDo';
import '../App.css';

let searchtask = [];

type TasksProps = {
    displaytodo: { id: number; task: string,done:boolean }[]
    filterText: string
    toggle: boolean
  }
  export default function Tasks ({displaytodo, filterText, toggle}: TasksProps){

    if (toggle) displaytodo = [];
    const searchQuery = filterText.toLowerCase();
    searchtask = [];
    for (let j = 0; j < displaytodo.length; j++) {
      let str = displaytodo[j];
      let t = str.task;
  
      if (t.includes(searchQuery)) {
        console.log(t);
        searchtask.push(str);
      }
    }
    displaytodo = searchtask.slice(0);
    return (
      <div>
        <div className="tasks">
          {displaytodo.map((todo) => {
            return <ToDo todo={todo} filtertext={filterText} toggle={toggle}/>;
          })}
        </div>
      </div>
    );
  }
  