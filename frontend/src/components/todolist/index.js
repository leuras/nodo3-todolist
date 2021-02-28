import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { List } from 'antd'

import Filters from '../../filters'

import TodoItem from './item'

import * as Styled from './styles'

const TodoList = (props) => {

  const [todoList, setTodoList] = useState(props.items)

  const doFilter = () => {
    const filter = Filters.get(props.show)
    setTodoList(filter.filter(props.items))
  }

  useEffect(doFilter, [props.items, props.show])
   
  return (
    <Styled.TodoListItems dataSource={ todoList } renderItem={ todo => (
      <List.Item>
        <TodoItem value={ todo } />
      </List.Item>
    )} />
  )
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  show: PropTypes.oneOf(['all', 'completed', 'pending']).isRequired
}

TodoList.defaultProps = {
  show: 'all'
}

export default TodoList