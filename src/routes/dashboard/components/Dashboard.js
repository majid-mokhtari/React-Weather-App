import React, { useState, useEffect } from "react";

const Todos = props => {
  const [todos, setTodos] = useState(props.todos);
  function onTodosChange(value, index, key) {
    const newTodos = [...todos];
    newTodos[index][key] = value;
    setTodos(newTodos);
  }
  useEffect(() => {
    setTodos(props.todos);
  }, [props.todos]);
  return (
    <div className="todo-list">
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <input
              type="text"
              value={todo.text}
              onChange={e => onTodosChange(e.target.value, i, "text")}
            />
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => onTodosChange(e.target.checked, i, "completed")}
            />
            <input
              type="text"
              value={todo.completedAt || new Date()}
              onChange={e => onTodosChange(e.target.value, i, "completedAt")}
            />
          </div>
        );
      })}
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
    <div>
      <Todos todos={todos} />;
      <button onClick={() => props.actions.deleteAllTodos()}>
        Delete All Todos
      </button>
      <button onClick={() => props.actions.addTodo()}>Add new Todo</button>
      <div>{weather}</div>
    </div>
  );
}

export default Dashboard;
