import React from 'react'

import { Layout, PageHeader } from 'antd'

import People from '../../../components/peoplelist'
import AppPageContent from '../../../components/apppagecontent'

const ContactsPage = () => {

  const contacts = [
    {name: 'John Doe', email: 'john.doe@mail.com'}, 
    {name: 'Jane Doe', email: 'jane.doe@mail.com'}, 
    {name: 'Gabriel Morningstar', email: 'gabriel.morningstar@mail.com'}
  ]

  return (
    <Layout>
      <AppPageContent>
        <PageHeader title="My Contacts" />
        <People.List accounts={ contacts } renderItem={ account => (
          <People.Item name={ account.name } email={ account.email } />
        )} />
      </AppPageContent>
    </Layout>
  )
}

export default ContactsPage