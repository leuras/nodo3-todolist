import React from 'react'

import { Layout, PageHeader } from 'antd'

import TodoList from '../../../components/todolist'
import AppPageContent from '../../../components/apppagecontent'

const TasksCompletedPage = () => {
  return (
    <Layout>
      <AppPageContent>
        <PageHeader title="Completed Tasks" />
        <TodoList show="completed" />
      </AppPageContent>
    </Layout>
  )
}

export default TasksCompletedPage