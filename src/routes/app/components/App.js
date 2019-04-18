import React, { useEffect } from "react";
import { Switch, Redirect, Route } from "react-router";
import Header from "./Header";
import Dashboard from "../../dashboard";
import NotFound from "../../exceptions/NotFound";
import { getCurrentUser } from "../../../lib/util.js";
import styles from "./styles";

//import * as util from "../../auth/components/util";
// componentWillMount() {
//   util.logoutUser();
// }

export default function App(props) {
  const { history, actions } = props;
  useEffect(() => {
    if (!getCurrentUser()) {
      history.push("/login");
    }
  });
  return (
    <div style={styles.container}>
      <div style={{ width: "100%" }}>
        <Header history={history} logoutUser={actions.logoutUser} />
        <div style={styles.children}>
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
