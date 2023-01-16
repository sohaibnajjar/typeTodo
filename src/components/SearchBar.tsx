
import * as React from 'react';
import { useState } from "react";
import '../App.css';

let searchtask = [];

type searchBarProps = {
    filterText: string
    toggle: boolean
    onFilterTextChange:Function 
    ontoggleChange:Function
  }
  export default function SearchBar ({filterText, toggle, onFilterTextChange, ontoggleChange}: searchBarProps){

    return (
      <div>
        <div className="componant" aria-roledescription="search">
          <input
            onChange={(e) => {
              onFilterTextChange(e.target.value);
            }}
            type="search"
            className="searchBar"
            placeholder="Search for a task"
          />
        </div>
        <label>
          <input
            type="checkbox"
            checked={toggle}
            onChange={(e) => ontoggleChange(e.target.checked)}
          />{" "}
          check to hide to dos
        </label>
      </div>
    );
  }