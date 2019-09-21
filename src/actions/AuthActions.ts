import { AsyncStorage } from "react-native";
import { Dispatch } from "redux";
import { USER_SET_TOKEN, USER_REGISTER_FAILED } from "./types";
import { post } from "../api";

const registerUserFail = (dispatch: Dispatch, errors: string[]) => {
  dispatch({
    type: USER_REGISTER_FAILED,
    payload: errors
  });
};

const registerUserSuccess = async (dispatch: Dispatch, token: string) => {
  await AsyncStorage.setItem("token", token);

  dispatch({
    type: USER_SET_TOKEN,
    payload: token
  });
};

export const authRegister = (user: any) => {
  return (dispatch: Dispatch) =>
    post("register", user)
      .then(({ data }) => {
        registerUserSuccess(dispatch, data.token);
      })
      .catch(err => {
        registerUserFail(dispatch, err.response.data.errors);
      });
};

export const authSetToken = (token: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: USER_SET_TOKEN,
      payload: token
    });
  };
};
