import axios from "axios";
import * as util from "../../auth/components/util";
import * as types from "../../../constants/types";

export function getWeather() {
  return dispatch => {
    axios
      .get("http://localhost:8000/weather")
      .then(res => {
        return dispatch({
          type: types.WEATHER_IS_SET,
          payload: res.data
        });
      })
      .catch(err => {
        return dispatch(util.onServerError(err));
      });
  };
}
