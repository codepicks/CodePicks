import { AsyncStorage } from "react-native";
// @ts-ignore
import { API_ENTRY_POINT } from "react-native-dotenv";
import axios from "axios";

const BASE_URL = `${"https://codepicks.jp"}${API_ENTRY_POINT}`;

export const api = async (path: string, params: any) => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return axios(`${BASE_URL}/${path}`, params);
};

export const get = (path: string, params = {}) => {
  return api(path, {
    method: "GET",
    data: params
  });
};

export const post = (path: string, params: any) => {
  return api(path, {
    method: "POST",
    data: params
  });
};
