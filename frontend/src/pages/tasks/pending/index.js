import React from 'react'

import { Layout, PageHeader } from 'antd'

import TodoList from '../../../components/todolist'
import AppPageContent from '../../../components/apppagecontent'

const TasksPendingPage = () => {
  return (
    <Layout>
      <AppPageContent>
        <PageHeader title="Pending Tasks" />
        <TodoList show="pending" />
      </AppPageContent>
    </Layout>
  )
}

export default TasksPendingPage