import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Loader } from '../../../store/duck/loader'
import { create } from '../../../store/duck/todo'

import NotificationService from '../../../services/notificationservice'

import * as Styled from './styles'

const NewTodoInput = () => {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const [description, setDescription] = useState('')

  const onSubmitHandler = () => {
    dispatch(Loader.show())

    const todo = normalize()
    dispatch(create(todo))
      .then(() => {
        setDescription('')
        dispatch(Loader.hide())
        NotificationService.success('Item added successfully')
      })
      .catch(reason => {
        dispatch(Loader.hide())
        NotificationService.error(reason.message)
      })
  }

  const normalize = () => {
    return {
      description: description, 
      done: false,
      owner: {
        id: user.id
      }
    }
  }

  const isDescriptionEmpty = () => description.trim().length === 0

  return (
    <Styled.TodoInput 
      placeholder="Add an item..." 
      value={ description }
      size="large"
      allowClear 
      addonAfter={ <Styled.TodoAddButton onClick={ onSubmitHandler } disabled={ isDescriptionEmpty() } /> }
      onChange={ e => setDescription(e.target.value) } 
      onPressEnter={ onSubmitHandler }
    />
  )
}

export default NewTodoInput