import styled from 'styled-components'

import { Input, Button } from 'antd'
import { EnterOutlined } from '@ant-design/icons'

export const TodoInput = styled(Input)`
  margin: 5vh 0;
`

export const TodoAddButton = styled(Button)
  .attrs(() => ({ type: 'link', icon: (<EnterOutlined />) }))``