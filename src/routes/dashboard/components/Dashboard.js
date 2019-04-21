import React from "react";
import TodoList from "./TodoList";
import "./styles.css";

function Dashboard(props) {
  const { weather } = props;
  return (
    <div className="dashboard">
      <TodoList {...props} />
      <div className="weather">
        <span>{weather}</span>
      </div>
    </div>
  );
}

export default Dashboard;
