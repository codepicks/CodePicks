import { PICK_ARTILCE_SELECT, PICK_ARTILCE_SUCCESS } from "./types";
import { post } from "../api";

export const pickArticleSelect = article => {
  return dispatch => {
    dispatch({
      type: PICK_ARTILCE_SELECT,
      payload: article
    });
  };
};

export const pickAriticlePost = ({ hash, text }) => {
  return dispatch =>
    post(`articles/${hash}/picks`, {
      text
    })
      .then(({ data }) => {
        return dispatch({
          type: PICK_ARTILCE_SUCCESS,
          payload: data
        });
      })
      .catch(err => console.error(err));
};
