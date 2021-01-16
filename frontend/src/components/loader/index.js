import React from 'react'

import * as Styled from './styles'

const Loader = props => {
  return (
    <Styled.SpinLoader size="large" spinning={ props.spinning } wrapperClassName="spin-loading">
      { props.children }
    </Styled.SpinLoader>
  )
}

export default Loader
