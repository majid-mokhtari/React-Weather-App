import axios from "axios";
import * as util from "../lib/util";
import { useState, useEffect, useReducer } from "react";

export const baseUrl =
  process.env.REACT_APP_PERSONAL_DASH_URL || "http://localhost:8010";

export function useFetch(path, reducer, request, type, method) {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, { loading: true, todos: data });
  const token = util.getCurrentUser();
  const headers = { token };
  async function fetch() {
    //`${baseUrl}/${path}`, { headers }
    const response = await axios({
      method,
      url: `${baseUrl}/${path}`,
      headers,
      data: request
    });
    const data = response.data[path];
    setData(data);
    dispatch({
      type,
      payload: data,
      loading: false
    });
  }
  useEffect(() => {
    fetch();
  }, []);
  return { data: state[path], dispatch };
}
