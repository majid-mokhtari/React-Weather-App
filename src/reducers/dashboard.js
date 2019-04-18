import objectAssign from "object-assign";
import * as types from "../constants/types";

const initialState = {
  location: null,
  weather: "Loading..."
};

export default function dashboard(state = initialState, action) {
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

    default:
      return state;
  }
}
