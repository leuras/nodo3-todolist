import styled from 'styled-components'

export const TodoItemContent = styled.span`
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`