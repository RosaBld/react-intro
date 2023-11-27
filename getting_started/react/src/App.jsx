import React, { useState } from 'react';


import './App.css';

import { Route, Routes } from 'react-router-dom';
import ToDo from './pages/ToDo.jsx';
import MyCalendar from './pages/Calendar.jsx';
import NavBar from './components/NavBar.jsx';

// const LSKEY="MyTodoApp";

function App() {
  const [todos, setTodos]=useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  console.log(todos);
  
  return (
    <>
      <div className="App">
        <NavBar />
            <Routes>
                <Route path="/" element={<ToDo todos={todos} addTodo={addTodo} />} />
                <Route path="/Calendar" element={<MyCalendar todos={todos} />} />
            </Routes>
      </div>
    </>
  );
}

export default App;