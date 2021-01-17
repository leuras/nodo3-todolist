import restAPI from './api'
import { store } from '../store'

export const getContacts = () => {
  const user = getUser()
  return restAPI.get(`/people/${user.id}/contacts`)
}

export const addContact = (contact) => {
  const user = getUser()
  return restAPI.post(`/people/${user.id}/contacts/add`, contact)
}

export const removeContact = (contact) => {
  const user = getUser()
  return restAPI.delete(`/people/${user.id}/contacts/remove`, contact)
}

const getUser = () => store.getState().auth.user

const PeopleService = {
  getContacts,
  addContact,
  removeContact
}

export default PeopleService