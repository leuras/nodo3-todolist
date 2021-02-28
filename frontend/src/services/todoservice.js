import restAPI from './api'
import { store } from '../store'

export const search = keyword => new Promise(resolve => {
  const tasks = store.getState().todo.items
  const filteredTasks = tasks.filter(task => task.description.toLowerCase().includes(keyword.toLowerCase()))

  resolve({ data: filteredTasks })
})

export const list = () => {
  const user = getUser()
  return restAPI.get(`/users/${user.id}/todolist`)
}

export const create = todo => {
  const user = getUser()
  return restAPI.post(`/users/${user.id}/todolist/add`, todo)
}

export const done = todo => {
  const user = getUser()
  return restAPI.put(`/users/${user.id}/todolist/${todo.id}/done`)
}

export const undone = todo => {
  const user = getUser()
  return restAPI.put(`/users/${user.id}/todolist/${todo.id}/undone`)
}

export const remove = todo => {
  const user = getUser()
  return restAPI.delete(`/users/${user.id}/todolist/${todo.id}`)
}

const getUser = () => store.getState().auth.user

const TodoService = {
  search,
  list,
  create,
  done,
  undone,
  remove
}

export default TodoService