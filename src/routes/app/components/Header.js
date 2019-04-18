import React from "react";
import styles from "./styles";

function HomeHeader(props) {
  function onLogoutClick() {
    props.logoutUser();
  }
  return (
    <div style={styles.main}>
      <div style={styles.userDropdown} className="header-dropdown" />
      <span onClick={onLogoutClick}>Log Out</span>
    </div>
  );
}
export default HomeHeader;
