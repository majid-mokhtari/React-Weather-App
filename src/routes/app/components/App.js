import React from "react";
import { Switch, Redirect, Route } from "react-router";
import PropTypes from "prop-types";
import Header from "./Header";
import Weather from "../../weather";
import NotFound from "../../exceptions/NotFound";
import styles from "./styles";

const App = props => {
  const { history, actions } = props;
  return (
    <div style={styles.container}>
      <div style={{ width: "100%" }}>
        <Header history={history} logoutUser={actions.logoutUser} />
        <div style={styles.children}>
          <Switch>
            <Redirect exact from="/app" to="/weather" />
            <Route path="/weather" component={Weather} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired
};

export default App;
