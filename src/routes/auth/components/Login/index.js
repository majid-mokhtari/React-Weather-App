import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import LoginForm from "./LoginForm";

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = state => {
  const { auth } = state;
  return {
    ...auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
