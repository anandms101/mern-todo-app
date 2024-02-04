import { useEffect, useState } from "react";
import TodoItem from "./todoItem";

const API_BASE= 'http://localhost:8080/todo';

function App() {
  
  const [items, setItems] = useState([]);

 useEffect(() => {
    GetTodos();
  }, []);

 const GetTodos = () => {
  fetch(API_BASE)
  .then(res => res.json())
  .then(data => setItems(data))
  .catch(err => console.log(err))
 }

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type='text'></input>
        <button>
          <span>ADD</span>
        </button>
      </div>

      <div className="todolist">  
        <TodoItem/>  
      </div>
    </div>
 
  );
}

export default App;