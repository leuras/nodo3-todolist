import styled from 'styled-components'

import { Avatar } from 'antd'

export const InitialsAvatar = styled(Avatar)
  .attrs(() => ({ size: 'large', gap: 4 }))`
    font-weight: bold;
    background-color: #173753;
  `