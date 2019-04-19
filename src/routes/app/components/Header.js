import React from "react";

function HomeHeader(props) {
  function onLogoutClick() {
    props.logoutUser();
  }
  return (
    <div className="header">
      <div className="header-dropdown">
        <i className="fa fa-user" />
        <i className="fa fa-chevron-down dropbtn" />
        <div className="dropdown-content">
          <span onClick={onLogoutClick}>Log Out</span>
        </div>
      </div>
    </div>
  );
}
export default HomeHeader;
