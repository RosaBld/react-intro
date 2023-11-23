import React from "react";

    // const initialTodos=["Learn React", "Be Awesome", "Stay Zen"]
    // const [todos, setTodos] = useState(initialTodos);
        // === const myState=useState(initialTodos);
        //  +  const todos=myState[0];
        //  +  const setTodos=myState[1];
let List=({todos, checkboxChange}) => {
    const taskStyle = {
        textDecoration:"line-through"
    };

    return (
        <div className="list">
            <h2>Todos</h2>
                <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" className="Check" checked={todo.completed} onChange={() => checkboxChange(index)}/> {" "} 
                        <span style={todo.completed ? taskStyle : null}>{todo.task}</span>
                        <div className="Dates">
                            <div className="fromTo">From: {todo.fromDate}</div>
                            <div className="fromTo">To: {todo.toDate}</div>
                        </div>
                    </li>
                ))}
                </ul>
            

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

export default List;