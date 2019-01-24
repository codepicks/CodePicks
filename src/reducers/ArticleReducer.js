import {
  ARTICLES_FETCH_SUCCESS,
  ARTICLES_PICK_SUCCESS,
} from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ARTICLES_FETCH_SUCCESS:
      return {
        ...state,
        [action.category]: action.payload,
      }
    case ARTICLES_PICK_SUCCESS:
      return state
    default:
      return state
  }
}
