import { combineReducers } from "redux";
import ArticleReducer from "./ArticleReducer";
import AuthReducer from "./AuthReducer";
import PickReducer from "./PickReducer";
import CommentReducer from "./CommentReducer";

export default combineReducers({
  articles: ArticleReducer,
  auth: AuthReducer,
  pick: PickReducer,
  comments: CommentReducer
});
