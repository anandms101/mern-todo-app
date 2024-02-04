import React, {useState} from "react";
const API_BASE= 'http://localhost:8080/todo';

function TodoItem(props){

const {name, id, setItems} = props
    return(
     <div className="todo">
        <div className="text">{name}</div>
        <div className="delete-todo"><span >X</span></div>
      </div>
    )
}

export default TodoItem;