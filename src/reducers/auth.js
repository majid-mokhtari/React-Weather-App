import objectAssign from "object-assign";
import * as types from "../constants/types";
import { getCurrentUser } from "../lib/util";

const initialState = {
  isLoggedIn: getCurrentUser() ? true : false,
  authError: ""
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return objectAssign({}, state, {
        viewState: types.USER_LOGGED_IN,
        isLoggedIn: true
      });

    case types.USER_LOGGED_OUT:
      return objectAssign({}, state, {
        isLoggedIn: false,
        viewState: types.USER_LOGGED_OUT,
        authError: ""
      });
    case types.SERVER_ERROR:
      return objectAssign({}, state, {
        authError: action.err
      });
    default:
      return state;
  }
}
