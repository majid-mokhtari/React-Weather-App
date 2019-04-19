import axios from "axios";
import * as util from "../lib/util";
import { useState, useEffect } from "react";

export const baseUrl =
  process.env.REACT_APP_PERSONAL_DASH_URL || "http://localhost:8010";

export function useFetch(url) {
  const token = util.getCurrentUser();
  const headers = { token };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetch() {
    const response = await axios(`${baseUrl}/${url}`, { headers });
    setData(response.data);
    setLoading(false);
  }
  useEffect(() => {
    fetch();
  }, []);
  return { data, loading };
}
