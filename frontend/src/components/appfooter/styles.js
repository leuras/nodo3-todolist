import styled from 'styled-components'

import { Layout } from 'antd'
import { HeartFilled } from '@ant-design/icons'

const { Footer } = Layout

export const AppFooter = styled(Footer)`
  color: #FFF;
  background-color: #1890FF;

  & {
    text-align: center;
  }
`

export const LoveSymbol = styled(HeartFilled)`
  color: red;
  margin: 0 5px;
`
