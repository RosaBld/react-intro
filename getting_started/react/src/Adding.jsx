import React, { useRef } from "react";

export default function Adding({ addTodo }) {
  const inputRef=useRef();

  function clickHandler() {
    const inputElement=inputRef.current;
    const newTask=inputElement.value;
    addTodo(newTask);
    inputElement.value='';
  }

    return (
        <div className="Adding">
          <input
            ref={inputRef}
            type="text"
            className="newTodo"
            placeholder="Write a new todo"/>
          <button onClick={clickHandler}>Add Todo</button>
        </div>
    );
}

