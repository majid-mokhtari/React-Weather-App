import React from "react";
import { Switch, Route, Redirect } from "react-router";
import App from "./routes/app";
import Auth from "./routes/auth";
import { getCurrentUser } from "./lib/util";

function handleAuthentication(props) {
  if (getCurrentUser()) {
    return <App {...props} />;
  } else {
    return <Auth {...props} />;
  }
}

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={Auth} />
      <Route path="*" component={props => handleAuthentication(props)} />
    </Switch>
  );
};
export default Routes;
