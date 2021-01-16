import { ErrorHandler } from '../../services/api'
import UserService from '../../services/userservice'

import { Types as AuthTypes } from './auth'

export const Types = {
  REGISTERED: 'users/REGISTERED',
  DID_FIRST_ACCESS: 'users/DID_FIRST_ACCESS'
}

export const register = user => dispatch => {
  return UserService.register(user)
    .then(response => { 
      dispatch({ type: AuthTypes.LOGIN, payload: response.data })
      dispatch({ type: Types.REGISTERED })
    })
    .catch(ErrorHandler.reject)
}

export const didUserFirstAccess = () => dispatch => dispatch({ type: Types.DID_FIRST_ACCESS })

const reducer = (state = { firstAccess: false }, action) => {
  switch (action.type) {
    case Types.REGISTERED:
      return {...state, isUserFirstAccess: true}
    case Types.DID_FIRST_ACCESS:
      return {...state, isUserFirstAccess: false}
    default:
      return state
  }
}

export default reducer