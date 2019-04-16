import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router";
import PropTypes from "prop-types";
import Header from "./Header";
import Weather from "../../weather";
import NotFound from "../../exceptions/NotFound";
import styles from "./styles";
//import * as util from "../../auth/components/util";

class App extends Component {
  // componentWillMount() {
  //   util.logoutUser();
  // }
  componentWillReceiveProps(nextProps) {
    const { isLoggedIn } = nextProps;
    if (!isLoggedIn) {
      nextProps.history.push("/login");
    }
  }

  render() {
    const { history, actions } = this.props;
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
  }
}

App.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired
};

export default App;
