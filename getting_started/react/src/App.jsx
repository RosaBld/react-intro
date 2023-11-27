import React from 'react';

import './App.css';
// import Adding from './components/Adding';
// import List from './components/List.jsx';
// import DeleteTask from './components/DeleteTask.jsx';

import { Route, Routes } from 'react-router-dom';
import ToDo from './pages/ToDo.jsx';
import Calendar from './pages/Calendar.jsx';
import NavBar from './components/NavBar.jsx';

// const LSKEY="MyTodoApp";

function App() {
  
  return (
    <>
      <div className="App">
        <NavBar />
            <Routes>
                <Route path="/" element={<ToDo />} />
                <Route path="/Calendar" element={<Calendar />} />
            </Routes>
      </div>
    </>
  );
}


export default App;