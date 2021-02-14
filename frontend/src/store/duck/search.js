import { ErrorHandler } from '../../services/api'
import PeopleService from '../../services/peopleservice'

import { Filters } from '../../constants/globalsearch'

export const Types = {
  SEARCH_TASKS: 'search/TASKS',
  SEARCH_PEOPLE: 'search/PEOPLE'
}

const serviceInvokerFactory = (filterType) => {
  if (Filters.PEOPLE === filterType) {
    return { type: Types.SEARCH_PEOPLE, service: PeopleService }
  }
}

export const search = (keyword, filterType) => dispatch => {
  const invoker = serviceInvokerFactory(filterType)

  return invoker.service.search(keyword)
    .then(response => dispatch({ type: invoker.type, payload: response.data }))
    .catch(ErrorHandler.reject)
}

const reducer = (state = { results: [] }, action) => {
  switch (action.type) {
    case Types.SEARCH_TASKS:
    case Types.SEARCH_PEOPLE:  
      return {...state, results: action.payload }
    default: 
      return state
  }
}

export default reducer