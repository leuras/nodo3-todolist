import styled from 'styled-components'

import { Menu } from 'antd'

const { SubMenu } = Menu

export const AvatarMenu = styled(Menu)
  .attrs(() => ({ mode: 'horizontal', selectable: false }))`
    background-color: transparent;
  `

export const AvatarMenuContent = styled(SubMenu)
  .attrs((props) => ({ title: props.avatar }))`
    float: right;
  `