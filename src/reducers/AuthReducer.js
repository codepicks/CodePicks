import {
  USER_SET_TOKEN,
  USER_REGISTER_FAILED,
} from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SET_TOKEN:
      return { ...INITIAL_STATE, token: action.payload }
    case USER_REGISTER_FAILED:
      return { ...state, errors: action.payload, loading: false }
    default:
      return state
  }
}
