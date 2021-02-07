import React from 'react'

import { Layout, PageHeader } from 'antd'

import AppPageContent from '../../../components/apppagecontent'

const SearchPeoplePage = () => {
  return (
    <Layout>
      <AppPageContent>
        <PageHeader title="People" />
      </AppPageContent>
    </Layout>
  )
}

export default SearchPeoplePage