import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";

import auth from "./auth";
import dashboard from "./dashboard";

const rootReducer = combineReducers({
  router,
  auth,
  dashboard
});

export default rootReducer;
