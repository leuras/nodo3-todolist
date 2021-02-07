import styled from 'styled-components'

import { Layout } from 'antd'

const { Header } = Layout

export const AppHeader = styled(Header)`
  color: #FFF;
  background-color: #1890FF;

  & {
    height: 56px;
    line-height: 56px;
    padding: 0;
  }
`