import styled, { css } from 'styled-components'

import { CheckCircleOutlined, CheckCircleFilled } from '@ant-design/icons'

export const CircleCheckbox = styled.span`
  cursor: pointer;
`

const IconStyle = css`
  color: #1890ff;
  font-size: 24px;
  margin-right: 14px;
`

export const IconPending = styled(CheckCircleOutlined)`
  ${IconStyle}
  
  svg > path:first-child {
    display: none;
  }

  &:hover svg > path:first-child {
    display: block;
  }
`

export const IconCompleted = styled(CheckCircleFilled)`
  ${IconStyle}
`