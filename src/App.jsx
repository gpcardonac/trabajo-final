import React, { Fragment, useState, useRef } from "react";
import {v4 as uuidv4 } from "uuid";
import {TodoList} from "./components/TodoList";

export function App() {
    const [todos, setTodos] = useState([

        { id: 1, task: "Tarea 1", completed: false},
    ]);

    const todoTaskRef = useRef();

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task --- '') return; 

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completed: false }];
        });


    };

    return (
        <Fragment>
        <TodoList todos={todos} />
        <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
        <button onClick={handleTodoAdd}>+</button>   
        <button>Elimiar</button> 
        
        </Fragment>
    );
}