import { COMMENTS_FETCH_SUCCESS } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case COMMENTS_FETCH_SUCCESS:
      return {
        ...state,
        [action.hash]: action.payload
      };
    default:
      return state;
  }
};
