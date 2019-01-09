import { combineReducers } from 'redux'
import ArticleReducer from './ArticleReducer'

export default combineReducers({
  articles: ArticleReducer,
})
