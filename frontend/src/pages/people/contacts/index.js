import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Layout, PageHeader } from 'antd'

import { Loader } from '../../../store/duck/loader'
import { getContacts } from '../../../store/duck/people'

import NotificationService from '../../../services/notificationservice'

import People from '../../../components/peoplelist'
import AppPageContent from '../../../components/apppagecontent'

const ContactsPage = () => {

  const { contacts } = useSelector(state => state.people)
  
  const dispatch = useDispatch()

  const fetchContacts = () => {
    dispatch(Loader.show())

    dispatch(getContacts())
      .then(() => dispatch(Loader.hide()))
      .catch(reason => {
        dispatch(Loader.hide())
        NotificationService.error(reason.message)
      })
  }

  useEffect(fetchContacts, [dispatch])

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