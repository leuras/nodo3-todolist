import React, { useState } from 'react'

import { Select } from 'antd'

import * as GlobalSearch from '../../constants/globalsearch'

import * as Styled from './styles'

const AppGlobalSearch = () => {

  const { Option } = Select

  const [filter, setFilter] = useState(GlobalSearch.ByTasks.value)

  const filterChangeHandler = (value) => {
    setFilter(value)
  }

  const searchHandler = (keyword) => {
    console.log(`Searching for ${keyword} in ${filter}`)
  }

  const FilterOptions = (
    <Select defaultValue={ filter } onChange={ filterChangeHandler }>
      { GlobalSearch.Options.map((option, index) => <Option key={ index } value={ option.value }>{ option.label }</Option>) }
    </Select>
  )

  return (
    <Styled.HeaderSearchInput placeholder="Search" addonBefore={ FilterOptions } onSearch={ searchHandler } allowClear enterButton />
  )
}

export default AppGlobalSearch