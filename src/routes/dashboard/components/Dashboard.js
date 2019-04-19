import React, { useEffect } from "react";
import TodoList from "./TodoList";
import "./styles.css";

function Dashboard(props) {
  const { weather, todos } = props;
  useEffect(() => {
    props.actions.getTodos();
    props.actions.getWeather();
  }, []);
  return (
    <div className="dashboard">
      <TodoList todos={todos} actions={props.actions} />
      <div className="weather">
        <span>{weather}</span>
      </div>
    </div>
  );
}

export default Dashboard;
