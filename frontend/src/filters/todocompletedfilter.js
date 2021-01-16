import TodoBaseFilter from './todobasefilter'

export default class TodoCompletedFilter extends TodoBaseFilter {

  filter(items) {
    return items.filter(item => item.done)
  }
}