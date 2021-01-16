const Types = {
  HIDE: 'loader/HIDE',
  SHOW: 'loader/SHOW'
}

const show = () => dispatch => {
  return dispatch({ type: Types.SHOW })
}

const hide = () => dispatch => {
  return dispatch({ type: Types.HIDE})
}

export const Loader = { show, hide }

export default function reducer(state = { loading: false }, action) {
  switch (action.type) {
    case Types.HIDE:
      return {
        ...state,
        loading: false
      }
    case Types.SHOW:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}