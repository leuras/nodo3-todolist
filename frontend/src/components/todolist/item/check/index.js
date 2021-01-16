import React, { useState, useEffect } from 'react'

import * as Styled from './styles'

const TodoItemCheck = (props) => {
  
  const [icon, setIcon] = useState(<Styled.IconPending />)
  const [checked, setChecked] = useState(props.completed)

  const onChangeHandler = () => {
    setChecked(! checked)
    if (typeof props.onChange === 'function') {
      props.onChange(checked)
    } 
  }

  useEffect(() => setChecked(props.completed), [props.completed])
  useEffect(() => setIcon(checked ? <Styled.IconCompleted /> : <Styled.IconPending />), [checked])
  
  return (
    <Styled.CircleCheckbox onClick={ onChangeHandler }>
      { icon }
    </Styled.CircleCheckbox>
  )
}

export default TodoItemCheck