import React from "react";

export default function Form({ todos, setInputText, setTodos, inputText, setStatus }) {
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault(); //prevent a browser reload/refresh
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  }

  return (
    <form action="">
      <input 
              onChange={inputTextHandler} 
              type="text" 
              className="todo-input" 
              value={inputText}
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
