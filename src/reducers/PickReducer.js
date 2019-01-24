import {
  PICK_ARTILCE_SELECT,
} from '../actions/types'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PICK_ARTILCE_SELECT:
      return action.payload
    default:
      return state
  }
}
