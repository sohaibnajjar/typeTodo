import * as React from "react";

interface searchBarProps {
  filterValue: string;
  isTasksShown: boolean;
  onFilterValueChange: (filterValue: string) => void;
  onShowTaskChangeChange: () => void;
}

const SearchBar: React.FC<searchBarProps> = ({
  filterValue,
  isTasksShown,
  onFilterValueChange,
  onShowTaskChangeChange,
}) => {
  return (
    <div>
      <div className="componant" aria-roledescription="search">
        <input
          value={filterValue}
          onChange={(e) => {
            onFilterValueChange(e.target.value.toLowerCase());
          }}
          type="search"
          className="searchBar"
          placeholder="Search for a task"
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={!isTasksShown}
          onChange={onShowTaskChangeChange}
        />
        check to hide to Todos
      </label>
    </div>
  );
};

export default SearchBar;
