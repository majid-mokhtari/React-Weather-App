import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import Dashboard from "../components/Dashboard";

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = state => {
  const { dashboard } = state;
  return {
    ...dashboard
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
