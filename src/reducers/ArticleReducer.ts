import {
  ARTICLES_FETCH_SUCCESS,
} from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ARTICLES_FETCH_SUCCESS:
      return {
        ...state,
        [action.category]: action.payload,
      }
    default:
      return state
  }
}
