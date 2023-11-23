import React, { useState, useEffect } from 'react';
import './App.css';
import Adding from './Adding.jsx';
import List from './List.jsx';

const LSKEY="MyTodoApp";

function App() {
  const initialTodos=[];
  const [todos, setTodos]=useState(() => {
    const storedTodos=JSON.parse(window.localStorage.getItem(LSKEY + ".todos"));
    return storedTodos || [];
  });

  function addTodo(todo) {
    setTodos(prevTodos => [...prevTodos, { ...todo, completed:false }]);
  }

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    console.log("New task added:", todos);
  }, [todos]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
        <Adding addTodo={addTodo} />
        
        <List todos = {todos} />
    </div>
  );
}

export default App;