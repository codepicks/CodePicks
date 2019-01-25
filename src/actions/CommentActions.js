import {
  COMMENTS_FETCH_SUCCESS,
} from './types'
import { get } from '../api'

// eslint-disable-next-line
export const commentsFetch = hash => {
  return dispatch => get(`articles/${hash}/picks`)
    .then(({ data }) => {
      return dispatch({
        hash,
        type: COMMENTS_FETCH_SUCCESS,
        payload: data,
      })
    })
    .catch(err => console.error(err))
}
