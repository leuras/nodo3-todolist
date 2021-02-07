import styled from 'styled-components'

import { Input } from 'antd'

const { Search } = Input

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