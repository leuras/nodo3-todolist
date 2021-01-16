import { ErrorHandler } from '../../services/api'
import AuthService from '../../services/authservice'

export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT'
}

export const login = credentials => dispatch => {
  return AuthService.login(credentials)
    .then(response => dispatch({ type: Types.LOGIN, payload: response.data }))
    .catch(ErrorHandler.reject)
}

export const logout = () => dispatch => {
  AuthService.logout()
  dispatch({ type: Types.LOGOUT })
}

const InitialState = {
  user: {}, 
  authenticated: false 
}

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, user: action.payload, authenticated: true }
    case Types.LOGOUT:
      return { ...state, user: {}, authenticated: false }
    default:
      return state
  }
}

export default reducer