import { Dispatch } from "redux";
import { PICK_ARTILCE_SELECT, PICK_ARTILCE_SUCCESS } from "./types";
import { post } from "../api";

export const pickArticleSelect = (article: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: PICK_ARTILCE_SELECT,
      payload: article
    });
  };
};

export const pickAriticlePost = ({
  hash,
  text
}: {
  hash: string;
  text: string;
}) => {
  return (dispatch: Dispatch) =>
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
