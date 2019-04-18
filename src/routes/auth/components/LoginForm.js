import React, { useState } from "react";
import styles from "./styles";

export default function LoginForm(props) {
  const email = useFormInput("", "text");
  const password = useFormInput("", "password");
  const { authError } = props;

  function handleLogin(e) {
    e.preventDefault();
    props.onLoginClick({ email: email.value, password: password.value });
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
          <label>Email </label>
          <input {...email} />
        </div>
        <div style={styles.formItem}>
          <label>Passowrd </label>
          <input {...password} />
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

function useFormInput(initialValue, type) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
    style: styles.formInput,
    autoComplete: "",
    type
  };
}
