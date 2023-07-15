import React, { useState } from "react";
import ToDoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <>
      <ToDoList todos={todos} />
      <input
        type="text"
        placeholder="Enter a new to-do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodos}>Clear</button>
      <div>{todos.length} things left to do</div>
    </>
  );
}

export default App;
