import "./App.css";
import * as React from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ToDo from "./components/ToDo";

export interface Todo {
  id: number;
  task: string;
  done: boolean;
}

const App = () => {
  const [storedTodos, setStoredTodos] = React.useState<Todo[]>([]);
  const [filterValue, setFilterValue] = React.useState<string>("");
  const [isTasksShown, setIsTasksShown] = React.useState<boolean>(true);

  React.useEffect(() => {
    const localStorageTodos: Todo[] = JSON.parse(localStorage.getItem("todo")!);

    if (Boolean(localStorageTodos)) {
      setStoredTodos(localStorageTodos);
    }
  }, []);

  const handleAddTask = (newTask: string) => {
    setStoredTodos((prev) => {
      const newTodos = [
        ...prev,
        {
          id: Math.random() * 100,
          task: newTask,
          done: false,
        },
      ];
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleTaskDelete = (id: number) => {
    const filteredValues = storedTodos.filter((todo) => todo.id !== id);
    setStoredTodos(filteredValues);
    localStorage.setItem("todo", JSON.stringify(filteredValues));
  };

  const handleOnChangeDone = (id: number) => {
    const mappedTasks = storedTodos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setStoredTodos(mappedTasks);
    localStorage.setItem("todo", JSON.stringify(mappedTasks));
  };

  const renderdTasks = storedTodos.filter((todo) =>
    todo.task.includes(filterValue)
  );

  return (
    <div>
      <div className="title">
        <h1>To Do List</h1>
      </div>
      <div className="componant">
        <AddTask onAddTodo={handleAddTask} />
      </div>

      <SearchBar
        filterValue={filterValue}
        isTasksShown={isTasksShown}
        onFilterValueChange={setFilterValue}
        onShowTaskChangeChange={() => setIsTasksShown((prev) => !prev)}
      />

      <div className="tasks">
        {isTasksShown &&
          renderdTasks.map((todo, index) => (
            <ToDo
              key={todo.id}
              index={index + 1}
              todo={todo}
              onDelete={handleTaskDelete}
              onChangeDone={handleOnChangeDone}
            />
          ))}
      </div>
      <Footer storedTodos={storedTodos} />
    </div>
  );
};
export default App;
