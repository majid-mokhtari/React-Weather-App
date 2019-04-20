import axios from "axios";
import * as util from "../../../lib/util";
import * as types from "../../../constants/types";

export const baseUrl =
  process.env.REACT_APP_PERSONAL_DASH_URL || "http://localhost:8010";

export function getWeather() {
  return dispatch => {
    axios
      .get(`${baseUrl}/weather`)
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

export function addTodo(data) {
  const token = util.getCurrentUser();
  const headers = { token };
  return dispatch => {
    axios
      .post(`${baseUrl}/todos`, data, { headers })
      .then(res => {
        return dispatch(getTodos());
      })
      .catch(err => {
        return dispatch(util.onServerError(err));
      });
  };
}

export function getTodos() {
  const token = util.getCurrentUser();
  const headers = { token };
  return dispatch => {
    axios
      .get(`${baseUrl}/todos`, { headers })
      .then(res => {
        const { data } = res;
        return dispatch({
          type: types.TODOS_LOADED,
          payload: data.todos
        });
      })
      .catch(error => {
        return dispatch(util.onServerError(error));
      });
  };
}

export function updateTodo(data, id) {
  const token = util.getCurrentUser();
  const headers = { token };
  return dispatch => {
    axios
      .put(`${baseUrl}/todos/${id}`, data, { headers })
      .then(res => {
        return dispatch(getTodos());
      })
      .catch(err => {
        return dispatch(util.onServerError(err));
      });
  };
}

export function deleteAllTodos() {
  const token = util.getCurrentUser();
  const headers = { token };
  return dispatch => {
    axios
      .delete(`${baseUrl}/todos`, { headers })
      .then(res => {
        return dispatch(getTodos());
      })
      .catch(err => {
        return dispatch(util.onServerError(err));
      });
  };
}
