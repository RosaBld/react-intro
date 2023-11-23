import React, { useState, useEffect } from 'react';
import './App.css';
import Adding from './components/Adding.jsx';
import List from './components/List.jsx';

const LSKEY="MyTodoApp";

function App() {
  const initialTodos=[];
  const [todos, setTodos, fromDate, toDate]=useState(() => {
    const storedTodos=JSON.parse(window.localStorage.getItem(LSKEY + ".todos"));
    return storedTodos || [];
  });

  const addTask = (newTask, fromDate, toDate) => {
    setTodos((prevTodos) => [...prevTodos, { task:newTask, completed:false, fromDate, toDate }]);
  };

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    console.log("New task added:", todos, fromDate, toDate);
  }, [todos]);

  const checkboxChange = (index) => {
    const updatedTodos=todos.map((todo,i) =>
      index===i? { ...todo, completed: !todo.completed } : todo);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
        <Adding addTask={addTask} />
        
        <List todos = {todos} checkboxChange={checkboxChange} />
    </div>
  );
}

export default App;