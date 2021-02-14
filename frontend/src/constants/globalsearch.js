export const Filters = Object.freeze({
  TASKS: 'Tasks',
  PEOPLE: 'People'
})

export const values = () => Object.keys(Filters).map(key => ({ label: Filters[key], value: key }))

export const valueOf = value => Filters[value]