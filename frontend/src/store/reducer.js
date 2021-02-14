import { combineReducers } from 'redux'

import auth from './duck/auth'
import loading from './duck/loader'
import user from './duck/user'
import todo from './duck/todo'
import people from './duck/people'
import search from './duck/search'

const rootReducer = combineReducers({ 
  auth,
  loading,
  user,
  todo,
  people,
  search
})

export default rootReducer