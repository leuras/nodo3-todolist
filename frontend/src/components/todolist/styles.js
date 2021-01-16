import styled from 'styled-components'

import { List } from 'antd'

export const TodoListItems = styled(List)
  .attrs(() => ({ bordered: true }))`
    background: #FFF;
  `