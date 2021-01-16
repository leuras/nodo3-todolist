import styled from 'styled-components'

import { Layout } from 'antd'

const { Content } = Layout

export const PublicContent = styled(Content)`
  background-color: #FFF;
  height: calc(100vh - 70px);
  padding: 24px;
`

export const RestrictedContent = styled(Content)`
  min-height: calc(100vh - (70px + 56px));
  min-width: calc(100vw - (200px + 24px));
  padding: 24px;
`