import React, { useState } from "react";
import styles from "./styles";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authError } = props;

  function handleLogin(e) {
    e.preventDefault();
    props.onLoginClick({ email, password });
  }

  function handleSignUp(e) {
    e.preventDefault();
    props.onSignUpClick({ email, password });
  }

  return (
    <div style={styles.loginContainer}>
      <div className="auth-title" style={styles.authTitle}>
        <h2>Personal Dashboard</h2>
      </div>
      <form style={styles.loginForm}>
        <div style={styles.formItem}>
          <label htmlFor="email">Email </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={styles.formInput}
            autoComplete=""
          />
        </div>
        <div style={styles.formItem}>
          <label htmlFor="password">Passowrd </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.formInput}
            autoComplete=""
          />
        </div>
        <span style={styles.forgotPass}>Forgot Password?</span>
        <span style={styles.authError}>{authError}</span>
        <button style={styles.loginBtn} onClick={handleLogin}>
          Login
        </button>
        <button style={styles.signUpBtn} onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
