import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";

class HomeHeader extends Component {
  constructor() {
    super();
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick({ key }) {
    if (key === "logout") {
      const { logoutUser } = this.props;
      const { origin } = window.location;
      logoutUser(`${origin}/callback`);
    }
  }

  render() {
    return (
      <div style={styles.main}>
        <div style={styles.userDropdown} className="header-dropdown" />
      </div>
    );
  }
}

HomeHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired
};
export default HomeHeader;
