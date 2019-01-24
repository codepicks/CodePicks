import {
  ARTICLES_FETCH_SUCCESS,
  ARTICLES_PICK_SUCCESS,
} from './types'
import { get, post } from '../api'

export const articlesFetch = category => {
  return dispatch => get(`categories/${category}/articles`)
    .then(({ data }) => {
      return dispatch({
        category,
        type: ARTICLES_FETCH_SUCCESS,
        payload: data,
      })
    })
    .catch(err => console.error(err))
}

export const articlesPick = ({ hash, text }) => {
  return dispatch => post(`articles/${hash}/picks`, {
    text,
  })
    .then(({ data }) => {
      return dispatch({
        type: ARTICLES_PICK_SUCCESS,
        payload: data,
      })
    })
    .catch(err => console.error(err))
}
