import objectAssign from "object-assign";
import * as types from "../constants/types";

export default function dashboard(state = {}, action) {
  switch (action.type) {
    case types.LOCATION_IS_SET:
      return objectAssign({}, state, {
        viewState: types.LOCATION_IS_SET,
        location: action.payload
      });
    case types.WEATHER_IS_SET:
      return objectAssign({}, state, {
        viewState: types.WEATHER_IS_SET,
        weather: action.payload
      });
    case types.TODOS_LOADED:
      return objectAssign({}, state, {
        viewState: types.TODOS_LOADED,
        todos: action.payload
      });
    case types.TODO_ADDED:
      return objectAssign({}, state, {
        viewState: types.TODO_ADDED,
        todos: action.payload
      });
    default:
      return state;
  }
}
