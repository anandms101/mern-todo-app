import { useEffect, useState } from "react";
import TodoItem from "./todoItem.js"

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type="text"></input>
        <button>
          <span>ADD</span>
        </button>
      </div>

      <div className="todolist">
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
