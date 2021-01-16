import styled from 'styled-components'

import { Layout, Input } from 'antd'

const { Header } = Layout
const { Search } = Input

export const AppHeader = styled(Header)`
  color: #FFF;
  background-color: #1890FF;

  & {
    height: 56px;
    line-height: 56px;
    padding: 0;
  }
`

export const HeaderSearchInput = styled(Search)`
  vertical-align: middle;

  & .ant-input-search-button {
    background: #389ced;
    border-color: #389ced;
  }

  & .ant-input-search-button:hover {
    background: #40a9ff;
  border-color: #40a9ff;
  }
`