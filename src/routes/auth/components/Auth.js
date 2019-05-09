import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import "./auth.css";

export default function Auth(props) {
  const { history, isLoggedIn } = props;
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/app");
    }
  });
  return (
    <div className="auth-container">
      <div>
        <h1>Do Good Points</h1>
      </div>
      <Switch>
        <Redirect exact from="/auth" to="/auth/login" />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Signup} />
      </Switch>
    </div>
  );
}
