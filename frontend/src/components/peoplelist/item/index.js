import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'antd'

import InitialsAvatar from '../../initialsavatar'

const PersonListItem = (props) => {
  return (
    <List.Item.Meta 
      avatar={ <InitialsAvatar name={ props.name }/> } 
      title={ props.name } 
      description={ props.email }
    />
  )
}

PersonListItem.propTypes = {
  name: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default PersonListItem