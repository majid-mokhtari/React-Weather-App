import React from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Routes from "../routes";

const mapDispatchToProps = {};

const mapStateToProps = state => ({});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  };
};

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Root);
