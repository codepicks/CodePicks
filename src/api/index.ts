import { AsyncStorage } from "react-native";
import { API_HOST, API_ENTRY_POINT } from "react-native-dotenv";
import axios from "axios";

const BASE_URL = `${"https://codepicks.jp"}${API_ENTRY_POINT}`;

export const api = async (path, params) => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return axios(`${BASE_URL}/${path}`, params);
};

export const get = (path, params = {}) => {
  return api(path, {
    method: "GET",
    data: params
  });
};

export const post = (path, params) => {
  return api(path, {
    method: "POST",
    data: params
  });
};
