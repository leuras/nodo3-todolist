import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import { Layout } from 'antd'

import AppHeader from './components/appheader'
import AppFooter from './components/appfooter'
import AppMenu from './components/appmenu'

import Loader from './components/loader'
import RestrictedRoute from './components/restrictedroute'

const browserHistory = createBrowserHistory()

const HomePage = lazy(() => import('./pages/home'))
const LoginPage = lazy(() => import('./pages/login'))
const RegisterPage = lazy(() => import('./pages/register'))
const TasksPendingPage = lazy(() => import('./pages/tasks/pending'))
const TasksCompletedPage = lazy(() => import('./pages/tasks/completed'))
const ContactsPage = lazy(() => import('./pages/people/contacts'))

const Routes = () => {

  const { loading } = useSelector(store => store.loading)
  const { authenticated } = useSelector(store => store.auth)

  return (
    <Router history={ browserHistory }>
      <Layout>
        { authenticated && <AppHeader /> }
        <Layout>
          { authenticated && <AppMenu /> }
          <Loader spinning={ loading }>
            <Suspense fallback={ !loading && <Loader /> }>
              <Switch>
                <Route exact path="/register" component={ RegisterPage } />
                <RestrictedRoute exact path="/home" component={ HomePage } />
                <RestrictedRoute exact path="/tasks/pending" component={ TasksPendingPage } />
                <RestrictedRoute exact path="/tasks/completed" component={ TasksCompletedPage } />
                <RestrictedRoute exact path="/people/contacts" component={ ContactsPage } />
                <Route path="*" component={ LoginPage } />
              </Switch>
            </Suspense>
          </Loader>
        </Layout>
        <AppFooter />
      </Layout>
    </Router>
  )
}

export default Routes