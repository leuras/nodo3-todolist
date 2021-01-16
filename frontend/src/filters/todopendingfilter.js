import TodoBaseFilter from './todobasefilter'

export default class TodoPendingFilter extends TodoBaseFilter {

  filter(items) {
    return items.filter(item => item.done === false)
  }
}