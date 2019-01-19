import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const ErrorPage = props => {
  const { history } = props;
  return (
    <div style={styles.errorContainer}>
      <div style={styles.errorImage} className="error-image" />
      <div style={styles.errorText}>
        <h1 style={styles.errorNum}>404</h1>
        <h2 style={styles.errorDesc}>
          Sorry, the page you visited does not exist.
        </h2>
        <button type="primary" onClick={() => history.push("/dashboard")}>
          Back to home
        </button>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  history: PropTypes.object.isRequired
};
export default ErrorPage;
