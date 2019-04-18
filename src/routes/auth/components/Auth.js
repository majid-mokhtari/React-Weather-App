import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCurrentUser } from "./util";
import LoginForm from "./LoginForm";
import styles from "./styles";

class Auth extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentWillMount() {
    const { history } = this.props;
    if (getCurrentUser()) {
      history.push("/app");
    }
  }

  componentWillReceiveProps() {
    const { history } = this.props;
    if (getCurrentUser()) {
      history.push("/app");
    }
  }

  handleLogin(values) {
    const { actions } = this.props;
    actions.loginRequest(values);
  }

  handleSignUp(values) {
    const { actions } = this.props;
    actions.signUpRequest(values);
  }

  render() {
    return (
      <div style={styles.authContainer} className="auth-container">
        <LoginForm
          onLoginClick={this.handleLogin}
          onSignUpClick={this.handleSignUp}
          authError={this.props.authError}
        />
      </div>
    );
  }
}

Auth.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  history: PropTypes.object.isRequired
};

export default Auth;
