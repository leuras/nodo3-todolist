import React from 'react'
import { useSelector } from 'react-redux'

import { Layout, PageHeader } from 'antd'

import TodoList from '../../../components/todolist'
import AppPageContent from '../../../components/apppagecontent'

const TasksCompletedPage = () => {
  
  const { items } = useSelector(state => state.todo)

  return (
    <Layout>
      <AppPageContent>
        <PageHeader title="Completed Tasks" />
        <TodoList items={ items } show="completed" />
      </AppPageContent>
    </Layout>
  )
}

export default TasksCompletedPage