import React from "react";

function HomeHeader(props) {
  const { logoutUser, isLoggedIn } = props;
  function onLogoutClick() {
    logoutUser();
  }
  return (
    <div className="header">
      <ul className="header-menu">
        <li>Discover</li>
        <li>Redeem</li>
        <li>About</li>
      </ul>
      {isLoggedIn ? (
        <div className="header-dropdown">
          <i className="fa fa-user" />
          <i className="fa fa-chevron-down dropbtn" />
          <div className="dropdown-content">
            <span onClick={onLogoutClick}>Log Out</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default HomeHeader;
