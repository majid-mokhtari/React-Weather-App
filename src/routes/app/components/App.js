import React, { useEffect } from "react";
import { Switch, Redirect, Route } from "react-router";
import Header from "./Header";
import Dashboard from "../../dashboard";
import NotFound from "../../exceptions/NotFound";
import "./styles.css";

export default function App(props) {
  const { history, actions, isLoggedIn } = props;
  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/login");
    }
  });
  return (
    <div className="container">
      <div className="content">
        <Header history={history} logoutUser={actions.logoutUser} />
        <div className="children">
          <Switch>
            <Redirect exact from="/app" to="/dashboard" />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
