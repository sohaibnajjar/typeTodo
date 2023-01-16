import '../App.css';
import * as React from 'react';
import { useState } from "react";
import Tasks from './Tasks';
import SearchBar from './SearchBar';

type ToDoSpaceProps = {
    displaytodo: { id: number; task: string,done:boolean }[]
  }
export default function ToDoSpace({displaytodo}: ToDoSpaceProps){
    const [filterText, setFilterText] = useState("");
    const [toggle, settoggle] = useState(false);
  
    return (
      <div>
        <SearchBar
          filterText={filterText}
          toggle={toggle}
          onFilterTextChange={setFilterText}
          ontoggleChange={settoggle}
        />
  
        <Tasks
          displaytodo={displaytodo}
          filterText={filterText}
          toggle={toggle}
        />
      </div>
    );
  }