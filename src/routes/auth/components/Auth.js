import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import styles from "./styles";

export default function Auth(props) {
  const { history, authError, actions, isLoggedIn } = props;
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/app");
    }
  });
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
