import { ErrorHandler } from '../../services/api'
import PeopleService from '../../services/peopleservice'

export const Types = {
  CONTACTS: 'people/CONTACTS',
  CONTACT_ADDED: 'people/CONTACT_ADDED',
  CONTACT_REMOVED: 'people/CONTACT_REMOVED'
}

export const getContacts = () => dispatch => {
  return PeopleService.getContacts()
    .then(response => dispatch({ type: Types.CONTACTS, payload: response.data }))
    .catch(ErrorHandler.reject)
}

export const addContact = (contact) => dispatch => {
  return PeopleService.addContact(contact)
    .then(() => PeopleService.contacts())
    .then(response => dispatch({ type: Types.CONTACT_ADDED, payload: response.data }))
    .catch(ErrorHandler.reject)
}

export const removeContact = (contact) => dispatch => {
  return PeopleService.removeContact(contact)
    .then(() => PeopleService.contacts())
    .then(response => dispatch({ type: Types.CONTACT_REMOVED, payload: response.data }))
    .catch(ErrorHandler.reject)
}

const reducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case Types.CONTACTS:
    case Types.CONTACT_ADDED:
    case Types.CONTACT_REMOVED:
      return { ...state, contacts: action.payload }
    default:
      return state
  }
}

export default reducer