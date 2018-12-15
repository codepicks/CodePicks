import {
  ARTICLES_FETCH_SUCCESS,
} from './types'
import { api } from '../api'

export const articlesFetch = category => {
  return dispatch => api(`categories/${category}/articles`)
    .then(({ data }) => {
      return dispatch({
        category,
        type: ARTICLES_FETCH_SUCCESS,
        payload: data
      })
    })
    .catch(err => console.error(err))
}
