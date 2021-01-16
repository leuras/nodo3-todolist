import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { Form, Input, Button, Layout, Row, Col, Divider } from 'antd'

import { login } from '../../store/duck/auth'
import { Loader } from '../../store/duck/loader'

import Rules from './rules'
import NotificationService from '../../services/notificationservice'

import AppPageContent from '../../components/apppagecontent'

import * as Styled from './styles'
import cover from '../../assets/images/logincover.jpg'

const LoginPage = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const { authenticated } = useSelector(state => state.auth)

  const onSubmitHandler = (values) => {
    dispatch(Loader.show())
    dispatch(login({ email: values.username, password: values.password }))
      .then(() => {
        dispatch(Loader.hide())
        history.push('/home')
      })
      .catch(reason => {
        dispatch(Loader.hide())
        NotificationService.error(reason.message)
      })
  }

  const goHomeIfAuthenticated = () => {
    if (authenticated) {
      history.push('/home')
    }
  }

  useEffect(goHomeIfAuthenticated, [authenticated, history])

  return (
    <Layout>
        <AppPageContent>
          <Row justify="space-around" align="bottom">
            <Col lg={ 10 }>
              <Styled.ImageCover src={ cover } />
            </Col>
            <Col xs={ 24 } lg={ 8 }>
              <Divider >Sign In</Divider>
              
              <Form name="login" layout="vertical" onFinish={ onSubmitHandler }>
                
                <Form.Item label="Username" name="username" rules={ Rules.username }>
                  <Input placeholder="Enter a valid username" />
                </Form.Item>

                <Form.Item label="Password" name="password" rules={ Rules.password }>
                  <Input.Password placeholder="Enter a password" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large">
                    Login
                  </Button>
                </Form.Item>

                <Form.Item>
                  Don't have an account? <Link to="register">Register</Link>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </AppPageContent>      
    </Layout>
  )
}

export default LoginPage