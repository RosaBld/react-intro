import React, { useRef, useState } from "react";

function Adding({addTask}) {
  const inputRef=useRef();
  const [fromDate, setFromDate]=useState("");
  const [toDate, setToDate]=useState("");

  // function clickHandler() {
  //   const inputElement=inputRef.current;
  //   const newTask=inputElement.value;
  //   addTask(newTask);
  //   inputElement.value="";
  // };
  // Doesn't need it if I'm using a handlesubmit with my form -> allows me to add dates!

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = inputRef.current.value;
    addTask(newTask, fromDate, toDate);
    inputRef.current.value = "";
    setFromDate("");
    setToDate("");
  };

    return (
        <form className="Adding" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="newTodo"
            placeholder="Write a new todo"/>

          <input
            type="date"
            value={fromDate}
            className="from"
            onChange={(e)=>setFromDate(e.target.value)}
          />
          <input
            type="date"
            value={toDate}
            className="to"
            onChange={(e) => setToDate(e.target.value)}
          />

          <button //</form>onClick={clickHandler}
          >Add Todo</button>
        </form>

    );
}

export default Adding;