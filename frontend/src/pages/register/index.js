import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { Form, Input, Button, Layout, Row, Col, Divider, Space } from 'antd'

import { Loader } from '../../store/duck/loader'
import { logout } from '../../store/duck/auth'
import { register } from '../../store/duck/user'

import Rules from './rules'
import NotificationService from '../../services/notificationservice'

import AppPageContent from '../../components/apppagecontent'

import * as Styled from './styles'
import cover from '../../assets/images/registercover.jpg'

const RegisterPage = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => dispatch(logout()), [dispatch])

  const onSubmitHandler = (values) => {
    dispatch(Loader.show())

    const user = normalize(values)
    dispatch(register(user))
      .then(() => {
        dispatch(Loader.hide())
        history.push('/home')
      })
      .catch(reason => NotificationService.error(reason.message))
  }

  const normalize = data => {
    return {
      name: data.name,
      email: data.email,
      password: data.password
    }
  }

  return (
    <Layout>
      <AppPageContent>
        <Row justify="space-around" align="bottom">
          <Col lg={ 10 }>
            <Styled.ImageCover src={ cover } />
          </Col>
          <Col xs={ 24 } lg={ 8 }>
            <Divider>Registration</Divider>
            
            <Form name="register" layout="vertical" onFinish={ onSubmitHandler }>
              <Form.Item label="Name" name="name" rules={ Rules.name }>
                <Input placeholder="Full Name" maxLength={ 100 } />
              </Form.Item>
              
              <Form.Item label="Email" name="email" rules={ Rules.email }>
                <Input placeholder="Email Address" maxLength={ 300 } />
              </Form.Item>

              <Form.Item label="Password" name="password" hasFeedback rules={ Rules.password }>
                <Input.Password placeholder="Password" maxLength={ 100 } />
              </Form.Item>

              <Form.Item label="Confirm Password" name="confirmPassword" hasFeedback
                  dependencies={ ['password'] } rules={ Rules.confirmPassword }>
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>

              <Form.Item>
                <Space>
                  <Button type="primary" size="large" htmlType="submit">
                    Register
                  </Button>

                  <Button htmlType="link" size="large">
                    <Link to="login">Cancel</Link>
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </AppPageContent>      
    </Layout>
  )
}

export default RegisterPage