import Cookies from "js.cookie";
import * as types from "../constants/types";

const COOKIE_PATH = "PERSONAL_DASH_USER";

export function storeCurrentUser({ token }) {
  Cookies.set(COOKIE_PATH, token);
}

export function getCurrentUser() {
  const currentUser = Cookies.get(COOKIE_PATH);
  if (currentUser) {
    return currentUser;
  }
  return null;
}

export function logoutUser() {
  Cookies.remove(COOKIE_PATH);
}

export function onServerError({ data, response }) {
  if (response && response.status === 401) {
    logoutUser();
  }
  const { err } = data;
  return {
    type: types.SERVER_ERROR,
    err
  };
}
