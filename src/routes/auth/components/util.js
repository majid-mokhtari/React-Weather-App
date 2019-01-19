import Cookies from "js.cookie";
import objectAssign from "object-assign";
import * as types from "../../../constants/types";

const COOKIE_PATH = "APP_USER";

export function getParameterByName(name, url) {
  const cleanName = name.replace(/[\]]/g, "\\$&");
  const regex = new RegExp(`[?&]${cleanName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url || window.location.href);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function storeCurrentUser(res) {
  const { token } = res;
  Cookies.set(COOKIE_PATH, token);
  return res;
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
  return {
    type: types.USER_LOGGED_OUT
  };
}

export function handleAuthResponse(response) {
  const token = response.headers.get("Authorization");
  return objectAssign({}, response, {
    token
  });
}

export function handleAuthErrors(response) {
  if (!response.ok) {
    if (response.status === 401) {
      Cookies.remove(COOKIE_PATH);
      //return nav.routeToLogin();
    }
  }
  return response;
}

export function handleServerErrors(res) {
  const { status } = res;
  const { errors, message } = status;
  if (message && message !== "success" && errors.length) {
    throw Error(`${message}: ${errors[0].message}`);
  }
  return res;
}

export function hasError(response) {
  return (
    response === null ||
    (response.is_alert && response.alert_type !== "success")
  );
}

export function onServerError(err) {
  const { message } = err;
  return {
    type: types.SERVER_ERROR,
    message
  };
}
