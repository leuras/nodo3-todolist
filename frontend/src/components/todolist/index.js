import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { List } from 'antd'

import Filters from '../../filters'

import TodoItem from './item'

import * as Styled from './styles'

const TodoList = (props) => {

  const items = useSelector(state => state.todo.items)
  const [todoList, setTodoList] = useState(items)

  const doFilter = () => {
    const filter = Filters.get(props.show)
    setTodoList(filter.filter(items))
  }

  useEffect(doFilter, [items, props.show])
   
  return (
    <Styled.TodoListItems dataSource={ todoList } renderItem={ todo => (
      <List.Item>
        <TodoItem value={ todo } />
      </List.Item>
    )} />
  )
}

TodoList.propTypes = {
  show: PropTypes.oneOf(['all', 'completed', 'pending']).isRequired
}

TodoList.defaultProps = {
  show: 'all'
}

export default TodoList