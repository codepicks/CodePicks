import { AsyncStorage } from "react-native";
import { USER_SET_TOKEN, USER_REGISTER_FAILED } from "./types";
import { post } from "../api";

const registerUserFail = (dispatch, errors) => {
  dispatch({
    type: USER_REGISTER_FAILED,
    payload: errors
  });
};

const registerUserSuccess = async (dispatch, token) => {
  await AsyncStorage.setItem("token", token);

  dispatch({
    type: USER_SET_TOKEN,
    payload: token
  });
};

export const authRegister = user => {
  return dispatch =>
    post("register", user)
      .then(({ data }) => {
        registerUserSuccess(dispatch, data.token);
      })
      .catch(err => {
        registerUserFail(dispatch, err.response.data.errors);
      });
};

export const authSetToken = token => {
  return dispatch => {
    dispatch({
      type: USER_SET_TOKEN,
      payload: token
    });
  };
};
