import TodoAllFilter from './todoallfilter'
import TodoPendingFilter from './todopendingfilter'
import TodoCompletedFilter from './todocompletedfilter'

const Filters = new Map()

Filters.set('all', new TodoAllFilter())
Filters.set('pending', new TodoPendingFilter())
Filters.set('completed', new TodoCompletedFilter())

export default Filters