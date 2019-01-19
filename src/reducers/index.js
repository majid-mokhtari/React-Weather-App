import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";

import auth from "./auth";
import weather from "./weather";

const rootReducer = combineReducers({
  router,
  auth,
  weather
});

export default rootReducer;
