import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  // console.log(filteredTodos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            text={todo.text}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

//41:29
