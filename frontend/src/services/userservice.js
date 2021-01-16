import restAPI from './api'

export const register = (user) => restAPI.post('/users/register', user)

const UserService = {
  register
}

export default UserService