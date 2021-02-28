import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Select } from 'antd'

import _ from 'lodash/lang'

import { Loader } from '../../store/duck/loader'
import { search } from '../../store/duck/search'

import * as GlobalSearch from '../../constants/globalsearch'
import * as Styled from './styles'

const AppGlobalSearch = (props) => {

  const { Option } = Select

  const [filterType, setFilterType] = useState(GlobalSearch.Filters.TASKS)

  const onFilterTypeChangeHandler = (value) => setFilterType(GlobalSearch.valueOf(value))

  const dispatch = useDispatch()

  const onSearchHandler = keyword => {
    if (isValidKeyword(keyword)) {
      doSearch(keyword)
    }
  }

  const isValidKeyword = keyword => ! _.isEmpty(keyword)

  const doSearch = keyword => {
    dispatch(Loader.show())
    dispatch(search(keyword, filterType))    
      .then(action => {
        dispatch(Loader.hide())
        if (_.isFunction(props.onComplete)) {
          props.onComplete({ filterType, keyword, results: action.payload })
        }
      })
      .catch(reason => {
        dispatch(Loader.hide())
        if (_.isFunction(props.onFail)) {
          props.onFail(reason)
        }
      })
  }

  const FilterOptions = (
    <Select defaultValue={ filterType } onChange={ onFilterTypeChangeHandler }>
      { GlobalSearch.values().map((option, index) => <Option key={ index } value={ option.value }>{ option.label }</Option>) }
    </Select>
  )

  return (
    <Styled.SearchInput 
      placeholder="Search" 
      addonBefore={ FilterOptions } 
      onSearch={ onSearchHandler } 
      allowClear 
      enterButton
    />
  )
}

AppGlobalSearch.propTypes = {
  onComplete: PropTypes.func,
  onFail: PropTypes.func
}

export default AppGlobalSearch