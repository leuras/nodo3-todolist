import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Layout, Collapse } from 'antd'

import { list } from '../../store/duck/todo'
import { Loader } from '../../store/duck/loader'
import { didUserFirstAccess } from '../../store/duck/user'

import NotificationService from '../../services/notificationservice'

import TodoList from '../../components/todolist'
import NewTodoInput from '../../components/todolist/input'
import AppPageContent from '../../components/apppagecontent'

import * as Styled from './styles'

const HomePage = () => {

  const { user } = useSelector(state => state.auth)
  const { isUserFirstAccess } = useSelector(state => state.user)
  
  const dispatch = useDispatch()

  const showGreetingsOnce = () => {
    if (isUserFirstAccess) {
      const message = `Welcome ${user.name}! Be awesome and get some work done!`

      NotificationService.success(message)
      didUserFirstAccess()
    }
  }

  const fetchItems = () => {
    dispatch(Loader.show())

    dispatch(list())
      .then(() => dispatch(Loader.hide()))
      .catch(reason => {
        dispatch(Loader.hide())
        NotificationService.error(reason.message)
      })
  }
  
  useEffect(fetchItems, [dispatch])
  useEffect(showGreetingsOnce, [isUserFirstAccess, user.name])

  return (
    <Layout>
      <AppPageContent>
        <NewTodoInput />
        <TodoList key="pending" show="pending" />
        <br/>
        <Collapse accordion bordered={ false }> 
          <Styled.CollapseContent header="Completed">
            <TodoList key="completed" show="completed" />
          </Styled.CollapseContent>
        </Collapse>
      </AppPageContent>
    </Layout>
  )
}

export default HomePage