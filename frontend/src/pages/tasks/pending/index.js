import React from 'react'
import { useSelector } from 'react-redux'

import { Layout, PageHeader } from 'antd'

import TodoList from '../../../components/todolist'
import AppPageContent from '../../../components/apppagecontent'

const TasksPendingPage = () => {

  const { items } = useSelector(state => state.todo)

  return (
    <Layout>
      <AppPageContent>
        <PageHeader title="Pending Tasks" />
        <TodoList items={ items } show="pending" />
      </AppPageContent>
    </Layout>
  )
}

export default TasksPendingPage