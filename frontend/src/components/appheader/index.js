import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Row, Col } from 'antd'
import { SmileOutlined, PoweroffOutlined } from '@ant-design/icons'

import { logout } from '../../store/duck/auth'

import NotificationService from '../../services/notificationservice'

import AppGlobalSearch from '../appglobalsearch'
import AvatarDropdown from '../avatardropdown'
import InitialsAvatar from '../initialsavatar'

import { Filters } from '../../constants/globalsearch'
import * as Styled from './styles'

const AppHeader = () => {

  const { user } = useSelector(state => state.auth)
  
  const history = useHistory()

  const onSearchCompleteHandler = event => {
    if (Filters.PEOPLE === event.filterType) {
      history.push('/people/search')
    } else if (Filters.TASKS === event.filterType) {
      history.push('/tasks/search')
    }
  }

  const onSearchFailHandler = reason => NotificationService.error(reason.message)

  const dispatch = useDispatch()

  const logoutClickHandler = () => {
    dispatch(logout())
    history.push('/')
  }

  const profileClickHandler = () => {}

  const menuOptions = [
    { icon: SmileOutlined, text: 'Profile', action: profileClickHandler },
    { icon: PoweroffOutlined, text: 'Logout', action: logoutClickHandler }
  ]

  return (
    <Styled.AppHeader>
      <Row justify="center" align="space-around">
        <Col span={ 10 } offset={ 6 }>
          <AppGlobalSearch onComplete={ onSearchCompleteHandler } onFail={ onSearchFailHandler } />
        </Col>
        <Col span={ 8 }>
          <AvatarDropdown key="menu" avatar={ <InitialsAvatar name={ user.name } /> } options={ menuOptions } />
        </Col>
      </Row>
    </Styled.AppHeader>
  )
}

export default AppHeader