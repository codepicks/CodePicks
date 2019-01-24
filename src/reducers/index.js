import { combineReducers } from 'redux'
import ArticleReducer from './ArticleReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
  articles: ArticleReducer,
  auth: AuthReducer,
})
