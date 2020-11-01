import { combineReducers } from 'redux'

import postsReducer from './postsReducer'
import postReducer from './postReducer'
import commentsReducer from './commentsReducer'
import xReducer from "./xReducer"

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
  x: xReducer
})

export default rootReducer
