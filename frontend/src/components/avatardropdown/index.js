import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from 'antd'

import * as Styled from './styles'

const AvatarDropdown = (props) => {
  return (
    <Styled.AvatarMenu>
      <Styled.AvatarMenuContent avatar={ props.avatar }>
        { 
          props.options.map((option, index) => (
            <Menu.Item key={ index } icon={ <option.icon /> } onClick={ option.action }>
              { option.text }
            </Menu.Item>
          ))
        }
      </Styled.AvatarMenuContent>
    </Styled.AvatarMenu>
  )
}

const DropdownOptionSchema = {
  icon: PropTypes.object,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}

AvatarDropdown.propTypes = {
  avatar: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(DropdownOptionSchema)).isRequired
}

export default AvatarDropdown