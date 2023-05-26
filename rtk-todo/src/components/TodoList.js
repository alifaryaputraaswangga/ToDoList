// components/TodoList.js

import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/tasksSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  let filteredTodos = todos;
  if (filter === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <div>
      <ul className="tasks-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.name}
            completed={todo.completed}
          />
        ))}
      </ul>
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
