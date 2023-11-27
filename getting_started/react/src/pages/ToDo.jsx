import React, { useState, useEffect } from 'react';
import Adding from '../components/Adding.jsx';
import List from '../components/List.jsx';
import DeleteTask from '../components/DeleteTask.jsx';

const LSKEY = "MyTodoApp";

function ToDo() {
  const initialTodos = [
    { task: "Learn React", fromDate: "2022-01-01", toDate: "2022-01-31", completed: false },
    { task: "Be Awesome", fromDate: "2022-02-01", toDate: "2022-02-28", completed: false },
    { task: "Stay Zen", fromDate: "2022-03-01", toDate: "2022-03-31", completed: false }
  ];

  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos"));
    return storedTodos || initialTodos;
  });

  const addTask = (newTask, fromDate, toDate) => {
    setTodos((prevTodos) => [...prevTodos, { task: newTask, completed: false, fromDate, toDate }]);
    console.log("New task added:", newTask, fromDate, toDate);
  };

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  const checkboxChange = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      index === i ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <Adding addTask={addTask} />
      <DeleteTask setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} checkboxChange={checkboxChange} />
    </div>
  );
}

export default ToDo;