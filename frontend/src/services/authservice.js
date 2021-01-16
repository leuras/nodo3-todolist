import restAPI from './api'

export const SessionName = 'session'

export const login = (credentials) => restAPI.post('/login', credentials)

export const logout = () => localStorage.removeItem(SessionName)

const Authservice = {
  login,
  logout
}

export default Authservice