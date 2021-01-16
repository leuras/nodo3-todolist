import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Row, Col } from 'antd'
import { SmileOutlined, PoweroffOutlined } from '@ant-design/icons'

import { logout } from '../../store/duck/auth'

import InitialsAvatar from '../initialsavatar'
import AvatarDropdown from '../avatardropdown'

import * as Styled from './styles'

const AppHeader = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)

  const profileClickHandler = () => {
    
  }

  const logoutClickHandler = () => {
    dispatch(logout())
    history.push('/')
  }

  const menuOptions = [
    { icon: SmileOutlined, text: 'Profile', action: profileClickHandler },
    { icon: PoweroffOutlined, text: 'Logout', action: logoutClickHandler }
  ]

  return (
    <Styled.AppHeader>
      <Row justify="center" align="space-around">
        <Col span={ 10 } offset={ 6 }>
          <Styled.HeaderSearchInput placeholder="Search" enterButton />
        </Col>
        <Col span={ 8 }>
          <AvatarDropdown key="menu" avatar={ <InitialsAvatar name={ user.name } /> } options={ menuOptions } />
        </Col>
      </Row>
    </Styled.AppHeader>
  )
}

export default AppHeader