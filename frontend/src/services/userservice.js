import restAPI from './api'
import { store } from '../store'

export const register = (user) => restAPI.post('/users/register', user)

export const getAuthenticatedUser = () => store.getState().auth.user

const UserService = {
  register,
  getAuthenticatedUser
}

export default UserService