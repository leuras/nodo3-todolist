import React, { useEffect, useState } from 'react'

import initials from 'initials'

import * as Styled from './styles'

const InitialsAvatar = (props) => {

  const [letters, setLetters] = useState()
  
  useEffect(() => {
    const chars = initials(props.name)
    setLetters(chars.toUpperCase())
  }, [props.name])

  return (
    <Styled.InitialsAvatar>{ letters }</Styled.InitialsAvatar>
  )
}

export default InitialsAvatar