import { Dispatch } from "redux";
import { ARTICLES_FETCH_SUCCESS } from "./types";
import { get } from "../api";

// eslint-disable-next-line
export const articlesFetch = (category: string) => {
  return (dispatch: Dispatch) =>
    get(`categories/${category}/articles`)
      .then(({ data }) => {
        return dispatch({
          category,
          type: ARTICLES_FETCH_SUCCESS,
          payload: data
        });
      })
      .catch(err => console.error(err));
};
