import { combineReducers } from 'redux'

import auth from './duck/auth'
import loading from './duck/loader'
import user from './duck/user'
import todo from './duck/todo'

const rootReducer = combineReducers({ 
  auth,
  loading,
  user,
  todo
})

export default rootReducer