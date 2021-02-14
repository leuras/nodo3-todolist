import restAPI from './api'
import UserService from './userservice'

export const search = (keyword) => restAPI.get(`/people/search/${keyword}`)

export const getContacts = () => {
  const user = UserService.getAuthenticatedUser()
  return restAPI.get(`/people/${user.id}/contacts`)
}

export const addContact = (contact) => {
  const user = UserService.getAuthenticatedUser()
  return restAPI.post(`/people/${user.id}/contacts/add`, contact)
}

export const removeContact = (contact) => {
  const user = UserService.getAuthenticatedUser()
  return restAPI.delete(`/people/${user.id}/contacts/remove`, contact)
}

const PeopleService = {
  search,
  getContacts,
  addContact,
  removeContact
}

export default PeopleService