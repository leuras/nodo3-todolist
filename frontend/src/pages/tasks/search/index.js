import React from 'react'
import { useSelector } from 'react-redux'

import { Layout, PageHeader } from 'antd'

import TodoList from '../../../components/todolist'
import AppPageContent from '../../../components/apppagecontent'

const SearchTasksPage = () => {

  const { results } = useSelector(state => state.search)

  return (
    <Layout>
      <AppPageContent>
        <PageHeader title="Resultados" />
        <TodoList items={ results } show="all" />
      </AppPageContent>
    </Layout>
  )
}

export default SearchTasksPage