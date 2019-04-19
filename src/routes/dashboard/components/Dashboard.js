import React, { useState, useEffect } from "react";
import "./styles.css";

const Todos = props => {
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [todos, setTodos] = useState(props.todos);
  function onTodosChange(value, index, key) {
    const newTodos = [...todos];
    newTodos[index][key] = value;
    setTodos(newTodos);
  }
  useEffect(() => {
    setTodos(props.todos);
  }, [props.todos]);
  function onLabelClick(index) {
    setEditingIndex(index);
  }
  function onAddTodoClick() {
    props.actions.addTodo({ text: newTodo });
    setNewTodo("");
  }
  return (
    <div className="todo-list">
      {todos.map((todo, i) => {
        const labelClass = editingIndex === i ? "hidden" : "";
        const inputClass = editingIndex === i ? "" : "hidden";
        return (
          <div className="todo-item" key={i}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => onTodosChange(e.target.checked, i, "completed")}
              className="todo-completed"
            />
            <label
              className={`todo-desc ${labelClass}`}
              onClick={() => onLabelClick(i)}
            >
              {todo.text}
            </label>
            <input
              type="text"
              value={todo.text}
              onChange={e => onTodosChange(e.target.value, i, "text")}
              className={`todo-desc ${inputClass}`}
            />
          </div>
        );
      })}
      <div className="todo-item">
        <div className="new-todo">
          <input
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            className="todo-desc"
          />
        </div>
        <div className="new-todo-btns">
          <button disabled={newTodo === ""} onClick={() => onAddTodoClick()}>
            Add new
          </button>
          <button onClick={() => props.actions.deleteAllTodos()}>
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

function Dashboard(props) {
  const { weather, todos } = props;
  useEffect(() => {
    props.actions.getTodos();
    props.actions.getWeather();
  }, []);
  return (
    <div className="dashboard">
      <Todos todos={todos} actions={props.actions} />
      <div className="weather">
        <span>{weather}</span>
      </div>
    </div>
  );
}

export default Dashboard;
