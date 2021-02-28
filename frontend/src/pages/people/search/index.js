import React from 'react'
import { useSelector } from 'react-redux'

import { Layout, PageHeader } from 'antd'

import People from '../../../components/peoplelist'
import AppPageContent from '../../../components/apppagecontent'

const SearchPeoplePage = () => {

  const { results } = useSelector(state => state.search)

  return (
    <Layout>
      <AppPageContent>
        <PageHeader title="Resultados" />
        <People.List accounts={ results } renderItem={ account => (
          <People.Item name={ account.name } email={ account.email } />
        )} />
      </AppPageContent>
    </Layout>
  )
}

export default SearchPeoplePage