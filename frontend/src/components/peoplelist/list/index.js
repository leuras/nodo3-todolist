import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'antd'

import * as Styled from './styles'

const PeopleList = (props) => {
  return (
    <Styled.PeopleList dataSource={ props.accounts } renderItem={ account => (
      <List.Item>
        { props.renderItem(account) }
      </List.Item>
    )} />
  )
}

const AccountShape = {
  name: PropTypes.string.isRequired
}

PeopleList.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.shape(AccountShape)).isRequired,
  renderItem: PropTypes.func.isRequired
}

export default PeopleList