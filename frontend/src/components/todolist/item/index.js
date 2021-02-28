import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Loader } from '../../../store/duck/loader'
import { done, undone } from '../../../store/duck/todo'

import NotificationService from '../../../services/notificationservice'

import TodoItemCheck from './check'

import * as Styled from './styles'

const TodoItem = (props) => {

  const dispatch = useDispatch()
  const [completed, setCompleted] = useState(props.value.done)

  const onChangeHandler = status => {
    dispatch(Loader.show())

    dispatch(completed ? undone(props.value) : done(props.value))
      .then(() => {
        dispatch(Loader.hide())
        setCompleted(status)
      })
      .catch(reason => {
        dispatch(Loader.hide())
        NotificationService.error(reason.message)
      })
  }

  useEffect(() => setCompleted(props.value.done), [props.value.done])

  return (
    <div>
      <TodoItemCheck key={ props.value.id } completed={ completed } onChange={ onChangeHandler } />
      <Styled.TodoItemContent completed={ completed }>{ props.value.description }</Styled.TodoItemContent>
    </div>
  )
}

const TodoItemSchema = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
}

TodoItem.propTypes = {
  value: PropTypes.shape(TodoItemSchema).isRequired
}

export default TodoItem