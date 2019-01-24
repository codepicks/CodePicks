import {
  PICK_ARTILCE_SELECT,
} from './types'
// import { post } from '../api'

// eslint-disable-next-line
export const pickArticleSelect = article => {
  return dispatch => {
    dispatch({
      type: PICK_ARTILCE_SELECT,
      payload: article,
    })
  }
}
