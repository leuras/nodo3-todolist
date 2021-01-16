import { ErrorHandler } from '../../services/api'
import TodoService from '../../services/todoservice'

export const Types = {
  LIST: 'todo/LIST',
  CREATE: 'todo/CREATE',
  DONE: 'todo/DONE',
  UNDONE: 'todo/UNDONE',
  DELETE: 'todo/DELETE'
}

export const list = () => dispatch => {
  return TodoService.list()
    .then(response => dispatch({ type: Types.LIST, payload: response.data }))
    .catch(ErrorHandler.reject)
}

export const create = todo => dispatch => {
  return TodoService.create(todo)
    .then(response => dispatch({ type: Types.CREATE, payload: response.data }))
    .catch(ErrorHandler.reject)
}

export const done = todo => dispatch => {
  return TodoService.done(todo)
    .then(() => TodoService.list())
    .then(response => dispatch({ type: Types.DONE, payload: response.data }))
    .catch(ErrorHandler.reject)
}

export const undone = todo => dispatch => {
  return TodoService.undone(todo)
    .then(() => TodoService.list())
    .then(response => dispatch({ type: Types.UNDONE, payload: response.data }))
    .catch(ErrorHandler.reject)
}

export const remove = todo => dispatch => {
  return TodoService.remove(todo)
    .then(() => dispatch({ type: Types.DELETE }))
    .catch(ErrorHandler.reject)
}

const reducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case Types.LIST:
      return { ...state, items: action.payload }
    case Types.CREATE:
      return { ...state, items: [...state.items, action.payload] }
    case Types.DONE:
      return { ...state, items: action.payload }
    case Types.UNDONE:
      return { ...state, items: action.payload }
    case Types.DELETE:
      return { ...state }
    default:
      return state
  }
}

export default reducer