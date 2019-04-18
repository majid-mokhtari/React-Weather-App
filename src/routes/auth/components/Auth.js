import React from "react";
import { getCurrentUser } from "../../../lib/util.js";
import LoginForm from "./LoginForm";
import styles from "./styles";

export default function Auth(props) {
  const { history, authError, actions } = props;
  if (getCurrentUser()) {
    history.push("/app");
  }
  return (
    <div style={styles.authContainer} className="auth-container">
      <LoginForm
        authError={authError}
        loginRequest={actions.loginRequest}
        signUpRequest={actions.signUpRequest}
      />
    </div>
  );
}
