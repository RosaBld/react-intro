import React, { useState } from "react";

export default function List () {
    const initialTodos=["Learn React", "Be Awesome", "Stay Zen"]
    const [todos, setTodos] = useState(initialTodos);
        // === const myState=useState(initialTodos);
        //  +  const todos=myState[0];
        //  +  const setTodos=myState[1];
    
    return (
        <div className="list">
            <h2>Todos</h2>
            {todos.map((todo, index) => (
                <ul key={index}>
                    <li><input type="checkbox" className="Check" /> {todo.task}</li>
                </ul>
            ))}

            {/* <div>
            <input type="checkbox" id="learnReact" name="learnReact"/>
            <label for="learnReact">Learn React</label>
            </div>

            <div>
            <input type="checkbox" id="beAwesome" name="beAwesome"/>
            <label for="beAwesome">Be awesome!</label>
            </div>

            <div>
            <input type="checkbox" id="stayZen" name="stayZen"/>
            <label for="stayZen">Stay Zen!</label>
            </div> */}
        </div>
    );
}