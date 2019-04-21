import React, { useState, useEffect } from "react";
import { useFetch } from "../../../lib/rest";
import dashboard from "../../../reducers/dashboard";
export const baseUrl =
  process.env.REACT_APP_PERSONAL_DASH_URL || "http://localhost:8010";

export default function TodoList(props) {
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const { data, dispatch } = useFetch(
    "todos",
    dashboard,
    {},
    "TODOS_LOADED",
    "get"
  );
  const [todos, setTodos] = useState(data);

  function onCompleteTodo(value, todo, index) {
    const newTodos = [...data];
    newTodos[index].completed = value;
    //setTodos(newTodos);
    dispatch({
      payload: newTodos,
      type: "TODO_ADDED"
    });
    // const { _id, text } = todo;
    // props.actions.updateTodo({ text, completed: value }, _id);
  }

  function onTextBlur(value, todo) {
    const { _id, completed } = todo;
    props.actions.updateTodo({ text: value, completed }, _id);
    setEditingIndex(-1);
  }

  function onTextChange(value, index) {
    const newTodos = [...data];
    newTodos[index].text = value;
    setTodos(newTodos);
  }

  function onLabelClick(index) {
    setEditingIndex(index);
  }

  function onAddTodoClick() {
    const newTodos = [...todos];
    newTodos.push({ text: newTodo, completed: false });
    //setTodos(newTodos);
    setNewTodo("");
    dispatch({
      payload: newTodos,
      type: "TODO_ADDED"
    });
  }

  function onAddTodoEnter(e) {
    if (e.keyCode === 13) {
      const newTodos = [...data, { text: newTodo, completed: false }];
      //setTodos(newTodos);
      //props.actions.addTodo({ text: e.target.value });
      dispatch({
        payload: newTodos,
        type: "TODO_ADDED"
      });
      setNewTodo("");
    }
  }
  console.log(data);
  useEffect(() => {
    setTodos(data);
  }, [data.length]);
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
