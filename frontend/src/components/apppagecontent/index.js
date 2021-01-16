import React from 'react'
import { useSelector } from 'react-redux'

import * as Styled from './styles'

function AppPageContent(props) {

  const { authenticated } = useSelector(state => state.auth)

  return (
    authenticated 
      ? <Styled.RestrictedContent>{ props.children }</Styled.RestrictedContent> 
      : <Styled.PublicContent>{ props.children }</Styled.PublicContent>
  )
}

export default AppPageContent