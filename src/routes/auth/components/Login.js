import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";

class Login extends Component {
  getButtons() {
    return (
      <div style={styles.loginButtons}>
        <button>LOGIN</button>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.loginContainer}>
        <div className="auth-title" style={styles.authTitle}>
          <h2>Weather App</h2>
        </div>
        {this.getButtons()}
      </div>
    );
  }
}

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  onGoogleLoginClick: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired
};
export default Login;
