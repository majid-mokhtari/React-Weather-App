import objectAssign from "object-assign";
import * as types from "../constants/types";

const initialState = {
  location: null
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case types.LOCATION_IS_SET:
      return objectAssign({}, state, {
        viewState: types.LOCATION_IS_SET,
        location: action.payload
      });

    default:
      return state;
  }
}
