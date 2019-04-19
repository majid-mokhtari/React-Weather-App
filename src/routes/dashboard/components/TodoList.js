import React, { useState, useEffect } from "react";

export default function TodoList(props) {
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [todos, setTodos] = useState(props.todos);

  function onCompleteTodo(value, todo, index) {
    const newTodos = [...todos];
    newTodos[index].completed = value;
    setTodos(newTodos);
    const { _id, text } = todo;
    props.actions.updateTodo({ text, completed: value }, _id);
  }

  function onTextBlur(value, todo) {
    const { _id, completed } = todo;
    props.actions.updateTodo({ text: value, completed }, _id);
    setEditingIndex(-1);
  }

  function onTextChange(value, index) {
    const newTodos = [...todos];
    newTodos[index].text = value;
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

  function onAddTodoEnter(e) {
    if (e.keyCode === 13) {
      props.actions.addTodo({ text: e.target.value });
      setNewTodo("");
    }
  }

  return (
    <div className="todo-list">
      {todos.map((todo, i) => {
        const labelClass =
          editingIndex === i ? "hidden" : todo.completed ? "completed" : "";
        const inputClass = editingIndex === i ? "" : "hidden";
        return (
          <div className="todo-item" key={i}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => onCompleteTodo(e.target.checked, todo, i)}
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
              onBlur={e => onTextBlur(e.target.value, todo)}
              onChange={e => onTextChange(e.target.value, i)}
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
            onKeyUp={e => onAddTodoEnter(e)}
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
}
